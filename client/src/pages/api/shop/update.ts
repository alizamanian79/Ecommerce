import type { NextApiRequest, NextApiResponse } from "next";
import { query } from "../../../../db-connection/db"; // Ensure this query function can handle stored procedures
import { validateHeaders } from "../../../../utils/validateHeaders/validateHeaders"; // Adjust the path if necessary

const apiName = "SHOP";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    if (!validateHeaders(req, res,process.env.NEXT_PUBLIC_VALID_API_KEY_SHOP)) {
      return;
    }

    try {
      const {shID, sellerID,shName,shDescription,shAddress,shPhone } = req.body;
      // Adjusting the way to call the stored procedure

      const rows: any = await query(
        `CALL ${process.env.NEXT_PUBLIC_DB_NAME}.SP_${apiName}_UPDATE(?,?,?,?,?,?)`,
        [shID, sellerID,shName,shDescription,shAddress,shPhone]
      ); // Use CALL for MySQL
      res.status(200).send(`Your ${apiName} information updated successfully.`);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: `${error} is exist with another id` });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

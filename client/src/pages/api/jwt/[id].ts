import { NextApiRequest, NextApiResponse } from "next";
import { decodeJwt } from "../../../../utils/jwt/decodeJwt";
import { encodeJwt } from "../../../../utils/jwt/encodeJwt";
import { validateHeaders } from "../../../../utils/validateHeaders/validateHeaders";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (!validateHeaders(req, res, process.env.NEXT_PUBLIC_JWT_SECRET_KEY)) {
      return;
    }

    try {
      const { id } = req.query;
      const { token } = req.body;

      switch (id) {
        case "decode":
          if (!token) { 
            console.log("Token is empty");
            return res.status(401).send("Token is empty");
          }
          const decodedResult = decodeJwt(token);
          return res.status(200).json(decodedResult);

        case "encode":
          // Implement your encoding logic here
          // const encodedResult = encodeJwt(payload); // Assuming payload comes from req.body or other sources
          return res.status(200).send(id);

        default:
          return res.status(400).send("Invalid ID in query parameter");
      }
    } catch (error) {
      console.error("Error: ", error);
      return res.status(500).send("An error occurred");
    }
  } else {
    return res.status(405).send("Method not allowed");
  }
}

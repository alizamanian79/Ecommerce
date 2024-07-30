import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';  // Ensure this query function can handle stored procedures
import { validateHeaders } from '../../../../utils/validateHeaders/validateHeaders';  // Adjust the path as necessary

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  if (req.method === 'GET') {
  if (!validateHeaders(req, res,process.env.VALID_API_KEY_USER)) {
    return;
  }

    try {
      // Adjusting the way to call the stored procedure
      const rows: any = await query(`CALL ${process.env.DB_NAME}.SP_USER_LIST()`); // Use CALL for MySQL

      if (!rows || rows.length === 0 || rows[0].length === 0) {
        return res.status(404).json({ error: 'No users found' });
      }

      res.status(200).json(rows[0]); // Adjusted to return the first row of the result set
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';  // Ensure this query function can handle stored procedures
import { validateHeaders } from '../../../../utils/validateHeaders/validateHeaders';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {


    // if (!validateHeaders(req, res, process.env.VALID_API_KEY_SELLER)) {
    //   console.error('Invalid API Key');
    //   return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
    // }

    try {
      const { uName, uLastName, uPhone, uPassword } = req.body;

      // Debugging output to verify the request body
      console.log('Request Body:', req.body);

      // Adjusting the way to call the stored procedure
      const rows: any = await query(`CALL ${process.env.DB_NAME}.SP_USER_ADD(?,?,?,?)`, [uName, uLastName, uPhone, uPassword]); // Use CALL for MySQL
      
      // Debugging output to verify the query result
      console.log('Query Result:', rows);

      res.status(200).send("Your account created successfully.");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'This account already exists' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../../db-connection/db';
import { validateHeaders } from '../../../../../utils/validateHeaders/validateHeaders'; // Adjust the path if necessary

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    if (!validateHeaders(req, res)) {
      return;
    }

    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: 'Missing user ID' });
      }

      const result: any = await query(`CALL ${process.env.DB_NAME}.SP_USER_DELETE(?)`, [id]);

      if (!result || result.length === 0 || result[0].length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.status(200).json(`user deleted successfully`); 
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

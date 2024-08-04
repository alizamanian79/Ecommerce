import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';
import { validateHeaders } from '../../../../utils/validateHeaders/validateHeaders'; // Adjust the path if necessary

const apiTitle="PRODUCT"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    if (!validateHeaders(req, res,process.env.VALID_API_KEY_PRODUCT)) {
      return;
    }

    try {
      const { id } = req.query;

      if (!id) {
        return res.status(400).json({ error: 'Missing  ID' });
      }

      const result: any = await query(`CALL ${process.env.DB_NAME}.SP_${apiTitle}_ID(?)`, [id]);

      if (!result || result.length === 0 || result[0].length === 0) {
        return res.status(404).json({ error: 'ID not found' });
      }

      res.status(200).json(result[0][0]); 
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

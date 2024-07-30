
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';
const apiTitle="SELLER"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {sUID,sCode}=req.body

    try {
   
      const result: any = await query(`CALL ${process.env.DB_NAME}.SP_${apiTitle}_ADD(?,?,?)`, [sUID,sCode])
      res.status(200).json(`Seller added successfully.`); 


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Seller already exist' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

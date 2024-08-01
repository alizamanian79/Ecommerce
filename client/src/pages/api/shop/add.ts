
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';
const apiTitle="SHOP"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {sellerID,shName,shDescription,shAddress,shPhone}=req.body

    try {
   
      const result: any = await query(`CALL ${process.env.DB_NAME}.SP_${apiTitle}_ADD(?,?,?,?,?)`, [sellerID,shName,shDescription,shAddress,shPhone])
      res.status(200).json(`${apiTitle} added successfully.`); 


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

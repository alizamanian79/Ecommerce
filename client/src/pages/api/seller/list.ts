
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';
import { validateHeaders } from '../../../../utils/validateHeaders/validateHeaders'; // Adjust the path if necessary
const apiTitle="SELLER"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {

    //Checking Header
    if (!validateHeaders(req, res)) {
      return;
    }

    const {sUID,sCode,sAddress}=req.body

    try {
   
      const result: any = await query(`CALL ${process.env.DB_NAME}.SP_${apiTitle}_ADD(?,?,?)`, [sUID,sCode,sAddress])
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


import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';
import { validateHeaders } from '../../../../utils/validateHeaders/validateHeaders'; // Adjust the path if necessary
const apiTitle="SHOP"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {

    //Checking Header
    if (!validateHeaders(req, res,process.env.NEXT_PUBLIC_VALID_API_KEY_SHOP)) {
      return;
    }


    try {
   
      const result: any = await query(`CALL ${process.env.NEXT_PUBLIC_DB_NAME}.SP_${apiTitle}_LIST()`)
      res.status(200).json(result[0]); 


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

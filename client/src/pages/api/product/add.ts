
import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '../../../../db-connection/db';
const apiTitle="PRODUCT"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const {pShopID,pImages,pTitle,pDescription,pMaterials,pColor,pSize,pTotal,pPrice,pType,pSeason}=req.body


    

    try {
   
      const result: any = await query(`CALL ${process.env.NEXT_PUBLIC_DB_NAME}.SP_${apiTitle}_ADD(?,?,?,?,?,?,?,?,?,?,?)`, [pShopID,pImages,pTitle,pDescription,pMaterials,pColor,pSize,pTotal,pPrice,pType,pSeason])
      res.status(200).json(`${apiTitle.toLowerCase()} added successfully.`); 


    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

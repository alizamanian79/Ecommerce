import type { NextApiRequest, NextApiResponse } from 'next';  
import { query } from '../../../../db-connection/db';  // Ensure this query function can handle stored procedures  

const handler = async (req: NextApiRequest, res: NextApiResponse) => {  
  if (req.method === 'POST') {     
    try {  
    const {uName,uLastName,uPhone,uPassword}= req.body
      // Adjusting the way to call the stored procedure  
      const rows:any = await query(`CALL ${process.env.DB_NAME}.SP_USER_ADD(?,?,?,?)`,[uName,uLastName,uPhone,uPassword]); // Use CALL for MySQL  
      res.status(200).send("your account created successfuly.");  
    } catch (error) {  
      console.error(error);  
      res.status(500).json({ error: 'This account already exist' });  
    }  
  } else {  
    res.setHeader('Allow', ['GET']);  
    res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  
};  

export default handler;
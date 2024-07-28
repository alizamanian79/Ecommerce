// src/pages/api/user/[id].ts  

import type { NextApiRequest, NextApiResponse } from 'next';  
import { query } from '../../../../db-connection/db';  // Ensure this query function can handle stored procedures  

const handler = async (req: NextApiRequest, res: NextApiResponse) => {  
  if (req.method === 'GET') {  
    try {  
      const { id } = req.query; // destructure id from req.query  

      // Adjusting the way to call the stored procedure  
      const rows: any = await query(`CALL ${process.env.DB_NAME}.SP_USER_ID(?)`, [id]); // Use CALL for MySQL  

      if (rows.length === 0) {  
        return res.status(404).json({ error: 'User not found' }); // Handle case where no user is found  
      }  

      res.status(200).json(rows[0]);  
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
import type { NextApiRequest, NextApiResponse } from "next";  
import { encodeJwt } from "../../../../utils/jwt/encodeJwt";  


export default async function handler(  
  req: NextApiRequest,  
  res: NextApiResponse  
) {  
  

  if (req.method === "POST") {  
    const {uPhone,uPassword} = req.body;  

    try {  
      const response = await fetch("http://localhost:3000/api/user/list", {  
        method: 'GET', 
        headers: {  
          "Content-Type": "application/json",  
          "headerLock": `${process.env.NEXT_PUBLIC_VALID_API_KEY_USER}`,  
        },  
      });  

      if (!response.ok) {  
        throw new Error(`Error fetching data: ${response.statusText}`);  
      }  

      const users = await response.json();  

      const user = users.find((item: any) =>  
        item.uPhone === uPhone && item.uPassword === uPassword  
      );  

      if (user) {  
        const Token = encodeJwt(user, '7d');  
        res.status(200).json({"Token":Token});  
      } else {  
        res.status(401).json({ message: "Invalid phone number or password" });  
      }  
    } catch (error: any) {  
      res.status(500).json({ message: "Internal server error", error: error.message });  
    }  
  } else {  
    res.status(405).json({ message: "Request method not allowed" });  
  }  
}
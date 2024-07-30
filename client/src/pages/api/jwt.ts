import { decodeJwt } from "../../../utils/jwt/decodeJwt";  
import { encodeJwt } from "../../../utils/jwt/encodeJwt";  
import type { NextApiRequest, NextApiResponse } from "next";  
import { validateHeaders } from "../../../utils/validateHeaders/validateHeaders";  

const handler = async (req: NextApiRequest, res: NextApiResponse) => {  
  const mode = req.body.mode;  
  const value = req.body.value;  

  if (!validateHeaders(req, res)) {  
    return;  
  }  

  else {  
    if (mode === "encodeJwt") {  
      try {  
        const encoded = encodeJwt(value);  
        console.log('Encoded JWT:', encoded);  
        res.status(200).json({ "Token": encoded });  
      } catch (error) {  
        res.status(500).json({ "Error": "Failed to encode JWT" });  
      }  
      return;  
    }  

    if (mode === "decodeJwt") {  
      try {  
        // Assuming the decodeJwt function requires three arguments  
        // You may need to replace `arg1` and `arg2` with actual values  
        const decoded = decodeJwt(value, arg1, arg2);  
        res.status(200).json({ "Decoded": decoded });  
      } catch (error) {  
        console.error('Error decoding JWT:', error);  
        res.status(500).json({ "Error": "Failed to decode JWT" });  
      }  
      return;  
    }  

    res.status(400).json({ "Error": "Invalid mode" });  
  }  
};  

export default handler;
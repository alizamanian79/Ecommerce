const key="accessGranted"
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const requiredHeaders = ['static-header'];
  const method = "GET";
  const apiKey = req.headers['static-header'];
  const validApiKey = key; 

  for (const header of requiredHeaders) {
    if (!req.headers[header]) {
      return res.status(400).json({ error: `Missing required Header` });
    }
  }


  if (apiKey !== validApiKey) {
    return res.status(403).json({ error: "Forbidden: Invalid API Key" });
  }




  if (req.method === method) {
    res.status(200).send("It works");
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default handler;

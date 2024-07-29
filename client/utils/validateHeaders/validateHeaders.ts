import { NextApiRequest, NextApiResponse } from 'next';

const requiredHeaders = ['headerLock'];
const validApiKey = process.env.VALID_API_KEY;

export const validateHeaders = (req: NextApiRequest, res: NextApiResponse): boolean => {
  // Check for the presence of required headers
  for (const header of requiredHeaders) {
    if (!req.headers[header.toLowerCase()]) {  // Ensure case-insensitivity
      res.status(400).json({ error: `Missing required header: ${header}` });
      return false;
    }
  }

  // Validate the API key
  const apiKey = req.headers['headerlock'];  // Convert header name to lowercase to match the check above
  if (apiKey !== validApiKey) {
    res.status(403).json({ error: "Forbidden: Invalid API Key" });
    return false;
  }

  return true;
};

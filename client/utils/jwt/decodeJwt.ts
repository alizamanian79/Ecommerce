// utils/decodeJwt.ts
import jwt from 'jsonwebtoken';

export const decodeJwt = (token: string): any => {
  
 
  try {
    // Decode the JWT without verifying the signature
    const decoded = jwt.decode(token, { complete: true });
    return decoded ? decoded.payload : null;
  } catch (error) {
    console.error('Error decoding JWT:', error);
    return null;
  }
};

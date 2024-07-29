import jwt from 'jsonwebtoken';

const SECRET_KEY:any = process.env.JWT_SECRET_KEY;

export const encodeJwt = (payload: object, expiresIn: string = '20m'): string => {
  try {
    // Sign and create a JWT with a 20-minute expiration
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn });
    return token;
  } catch (error) {
    
    throw new Error('Failed to create JWT');
  }
};

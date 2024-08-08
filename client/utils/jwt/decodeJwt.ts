import * as jwt from 'jsonwebtoken';

const SECRET_KEY: string = process.env.NEXT_PUBLIC_JWT_SECRET_KEY!;
const SALT: string = process.env.NEXT_PUBLIC_VALID_API_KEY!;

const generateSecretKey = (secret: string, salt: string): string => {
  return secret + salt;
};

export const decodeJwt = (token: string): object | string => {
  try {
    const combinedKey = generateSecretKey(SECRET_KEY, SALT);
    const decoded = jwt.verify(token, combinedKey);
    return decoded;
  } catch (error) {
    throw new Error('Failed to decode JWT');
  }
};

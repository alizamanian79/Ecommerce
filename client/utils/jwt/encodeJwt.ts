import * as jwt from 'jsonwebtoken';

const SECRET_KEY: string = process.env.NEXT_PUBLIC_JWT_SECRET_KEY!;
const SALT: string = process.env.NEXT_PUBLIC_VALID_API_KEY!;

const generateSecretKey = (secret: string, salt: string): string => {
  return secret + salt;
};

export const encodeJwt = (payload: object, expiresIn: string): string => {
  try {
    const combinedKey = generateSecretKey(SECRET_KEY, SALT);
    const token = jwt.sign(payload, combinedKey, { expiresIn });
    return token;
  } catch (error) {
    throw new Error('Failed to create JWT');
  }
};

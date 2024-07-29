// Example usage in a Next.js API route or elsewhere
import { decodeJwt } from '../utils/decodeJwt'; // Adjust the path as needed

const token = 'your-jwt-token-here';
const decoded = decodeJwt(token);
console.log('Decoded JWT:', decoded);

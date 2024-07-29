import { encodeJwt } from '../utils/jwtUtils'; // Adjust the path as needed

const payload = { userId: 123, role: 'admin' };
const token = encodeJwt(payload);

console.log('Generated JWT:', token);

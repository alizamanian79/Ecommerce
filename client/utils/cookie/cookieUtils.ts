// utils/cookieUtils.ts
import { Cookies } from 'react-cookie';

// Initialize the Cookies instance
const cookies = new Cookies();

// Set a cookie
export const setCookie = (name: string, value: string, options: any = {}) => {
  cookies.set(name, value, { path: '/', ...options });
};

// Get a cookie
export const getCookie = (name: string) => {
  return cookies.get(name);
};

// Remove a cookie
export const removeCookie = (name: string, options: any = {}) => {
  cookies.remove(name, { path: '/', ...options });
};

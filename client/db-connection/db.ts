// lib/db.ts  
import mysql from 'mysql2/promise';  

// Create a connection pool  
const conn = mysql.createPool({  
  host: process.env.NEXT_PUBLIC_DB_HOST || 'localhost',  
  user: process.env.NEXT_PUBLIC_DB_USER || 'root',  
  database: process.env.NEXT_PUBLIC_DB_NAME || 'ecommerceshopdb',  
  password: process.env.NEXT_PUBLIC_DB_PASSWORD || '1234',  
  port: Number(process.env.NEXT_PUBLIC_DB_PORT) || 3306, 
  waitForConnections: true,  
  connectionLimit: 10,  
  queueLimit: 0,  
});  

// A function to execute queries  
export const query = async (sql: string, values?: any) => {  
  const [rows] = await conn.execute(sql, values);  
  return rows;  
};
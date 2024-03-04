

const mysql = require('mysql2');
require('dotenv').config();

const conn=mysql.createConnection({
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
})
conn.connect((error) => {
    if (error) {
      console.log(`Error connect to Database : ${error}`);
    } else {
      console.log(`Database Connected successfully`);
    }
  });
  
  module.exports = conn;


const express = require("express");
const app = express();
const bodParser =require('body-parser');
const cors = require('cors');
const path = require('path')
const port =9091;

// Server Usages
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// import Routes
const apiTest = require('./routes/products')
const apiUpload = require('./routes/upload')


app.use('/api',apiTest);
app.use('/api/upload',apiUpload);

app.listen(port,()=>console.log(`App is Listening to port ${port}`))





const express = require("express");
const app = express();
const bodParser =require('body-parser');
const cors = require('cors');
const port =9091;

// import Routes
const apiTest = require('./routes/test')


// Server Usages
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
app.use('/api',apiTest)

app.listen(port,()=>console.log(`App is Listening to port ${port}`))



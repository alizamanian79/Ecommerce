
const express = require('express');
const router =express.Router();
require("dotenv").config();

router.get('/test',(req,res)=>{
    res.send(`${process.env.DBPASSWORD}`)
})



module.exports=router;
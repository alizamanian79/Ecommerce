const routerName="seller";
const express = require('express');
const router =express.Router();
const textConvert = require('../publicJS/textConverter/index');
const {convertToUpperCase,convertToLowerCase}=textConvert;
const conn = require("../database/db")
const dml = [
  "pattern",
  "list",
  "add",
  "update",
  "delete"
];



//Aysnc Router Apis Part

//Pattern
router.get(`/${routerName}/${dml[0]}`,async(req,res,next)=>{
  const data = {
    "sID":"Varchar",
    "sName":"Varchar",
    "sLastName":"Varchar",
    "sPhone":"Varchar",
    "sUserName":"Varchar",
    "sPassword":"Varchar",
    "sResetToken":"Varchar"
  }
  res.send(JSON.stringify(data))
})


//list
router.get(`/${routerName}/${dml[1]}`,async(req,res,next)=>{
  const SP = `Call SP_${convertToUpperCase(dml[1])}_${convertToUpperCase(routerName)}`;
  conn.query(SP, (error, result) => {
    if (error) {
      next();
      return
    } else {
      res.send(JSON.stringify(result[0]));
    }
  });
})

//add
router.post(`/${routerName}/${dml[2]}`,async(req,res,next)=>{
  const {
    sName,
    sLastName,
    sPhone,
    sUserName,
    sPassword,
    sResetToken,
  }=req.body
  const SP = `Call SP_${convertToUpperCase(dml[2])}_${convertToUpperCase(routerName)} (?,?,?,?,?,?g)`;
  conn.query(SP,[  sName,
    sLastName,
    sPhone,
    sUserName,
    sPassword,
    sResetToken], (error, result) => {
    if (error) {
      throw error;
    } else 
      res.send(JSON.stringify(result[0]));
    
  });





})





//update
router.put(`/${routerName}/${dml[3]}`,async(req,res,next)=>{
  res.send(dml[3]);
})

//delete
router.delete(`/${routerName}/${dml[4]}/:id`,async(req,res,next)=>{
  const id =req.params.id;
res.send(dml[4]+' '+id);
})

//ID
router.get(`/${routerName}/:id`,async(req,res,next)=>{
  const id = req.params.id
  res.send(id);
})



module.exports=router;
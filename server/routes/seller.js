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
  }=req.body
  const SP = `call ecommerceshop.SP_${convertToUpperCase(dml[2])}_${convertToUpperCase(routerName)} (?, ?, ?, ?, ?) `;
  conn.query(SP,[
    sName,
    sLastName,
    sPhone,
    sUserName,
    sPassword,
    ], (error, result) => {
    if (error) {
      throw error;
    } else 
      res.send("Item Added Successfuly . . .");
    
  });
 
})


//update
router.put(`/${routerName}/${dml[3]}`,async(req,res,next)=>{
  res.send(dml[3]);
})

//delete
router.delete(`/${routerName}/${dml[4]}/:id`,async(req,res,next)=>{
  const sID =req.params.id;
  const SP = `call ecommerceshop.SP_${convertToUpperCase(dml[4])}_${convertToUpperCase(routerName)} (?) `;
  conn.query(SP,[sID], (error, result) => {
    if (error) {
      throw error;
    } else 
      res.send("Item Deleted Successfuly . . .");
    
  });



})



//login
router.post(`/${routerName}/login`,async(req,res,next)=>{
  const {sUserName,sPassword,sResetToken}= req.body
  const loginSP = `call ecommerceshop.SP_SELECT_SELLER(?, ?, null)`
  const forgotten = `call ecommerceshop.SP_SELECT_SELLER(?, null, ?)`

  if(sResetToken == null || "" || undefined || []){
    conn.query(loginSP,[sUserName,sPassword], (error, result) => {
      if (error) {
        throw error;
      } else 
        res.send(result[0]);
      
    });

  }else{

    conn.query(forgotten,[sUserName,sResetToken], (error, result) => {
      if (error) {
        throw error;
      } else 
        res.send(result[0]);
      
    });

  }

})



module.exports=router;
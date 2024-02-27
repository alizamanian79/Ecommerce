const routerName="products";
const express = require('express');
const router =express.Router();
const dml = [
  "pattern",
  "list",
  "add",
  "update",
  "delete"
];

//Static Data
const SD = require("../staticData/products.json")


//Aysnc Router Apis Part

//Pattern
router.get(`/${routerName}/${dml[0]}`,async(req,res,next)=>{
    res.send(dml[0]);
})


//list
router.get(`/${routerName}/${dml[1]}`,async(req,res,next)=>{
  res.send(dml[1]);
})

//add
router.post(`/${routerName}/${dml[2]}`,async(req,res,next)=>{
  res.send(dml[2]);
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
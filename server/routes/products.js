const routerName = 'products'
const express = require("express");
const router = express.Router();




pDescription
pSizes JSON,
pColors JSON,
pCategori JSON,
pTotal INT,
pPrice INT

router.get(`/${routerName}/pattern`,async(req,res)=>{
  const data ={
    "pID":"varchar10",
    "pSellerID":"varchar8",
    "pTitle":"varchar45",
    "pDescription":"varcahr450",
    "pSizes":"json",
    "pColors":"json",
    "pCategori":"json",
    "pTotal":"json",
    "pPrice":"json"

    
  }
  res.status(200).send(data)
})



module.exports=router;
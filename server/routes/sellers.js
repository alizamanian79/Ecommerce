const routerName="sellers";
const express = require('express');
const router =express.Router();
const textConvert = require('../publicJS/textConverter/index');
const {convertToUpperCase,convertToLowerCase}=textConvert;

const folderManager = require("../publicJS/folderManager");
const {createFolder,deleteFolder} = folderManager

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
  const {
    sID,
    sName,
    sLastName,
    sPhone,
    sUserName,
    sPassword,
  }=req.body
  const SP = `call ecommerceshop.SP_${convertToUpperCase(dml[3])}_${convertToUpperCase(routerName)} (?,?, ?, ?, ?, ?, null) `;
  conn.query(SP,[
    sID,
    sName,
    sLastName,
    sPhone,
    sUserName,
    sPassword,
  
    ], (error, result) => {
    if (error) {
      throw error;
    } else 

      res.send("Item updated Successfuly . . .");
    
  });
 
})

//Delete
router.delete(`/${routerName}/${dml[4]}/:id`,async(req,res,next)=>{
  const sID =req.params.id;
  const SP = `call ecommerceshop.SP_${convertToUpperCase(dml[4])}_${convertToUpperCase(routerName)} (?) `;
  conn.query(SP,[sID], (error, result) => {
    if (error) {
      throw error;
    } else 

    deleteFolder(`${sID}`,`../uploads`)
      res.send("Item Deleted Successfuly . . .");
    
  });



})





//HandleToken

router.post(`/${routerName}/login/sendtoken`, async (req, res, next) => {
  const { sPhone } = req.body;
  const SP = `CALL ecommerceshop.SP_SELLERS_TOKEN(?)`;
  
  conn.query(SP, [sPhone], (error, result) => {
    if (error) {
      throw error;
    } else {
      try {
        setTimeout(() => {
          expireToken(result[0]);
        }, 30*1000);
        
        res.send(result[0]);
      } catch (err) {
        throw err;
      }
    }
  });
});

async function expireToken(seller) {
  const SP = `CALL ecommerceshop.SP_${convertToUpperCase(dml[3])}_${convertToUpperCase(routerName)} (?,?,?,?,?,?,null)`;
  
  conn.query(SP, [
    seller[0].sID,
    seller[0].sName,
    seller[0].sLastName,
    seller[0].sPhone,
    seller[0].sUserName,
    seller[0].sPassword,
  
  ], (error, result) => {
    if (error) {
      throw error;
    } else {
      console.log("deleted token")
    }
  });
}






//Login
router.post(`/${routerName}/login`, async (req, res, next) => {
  const { sUserName, sPassword, sResetToken } = req.body;

  try {
    if (sResetToken != null && sUserName == '' && sPassword == '') {
      const result = await loginByToken(sResetToken);
      console.log(result);
      res.status(200).send(result);
    } else {
      const result = await login(sUserName, sPassword);
      console.log(result);
      res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
});

async function login(sUserName, sPassword) {
  const SP = `CALL ecommerceshop.SP_SELECT_SELLERS (?, ?, null)`;
  return new Promise((resolve, reject) => {
    conn.query(SP, [sUserName, sPassword], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
}

async function loginByToken(sResetToken) {
  const SP = `call ecommerceshop.SP_SELECT_SELLERS('', '', ?);`;
  return new Promise((resolve, reject) => {
    conn.query(SP, [sResetToken], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
}


module.exports=router;
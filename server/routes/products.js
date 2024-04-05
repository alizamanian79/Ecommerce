const routerName = "products";
const express = require("express");
const router = express.Router();
const textConvert = require("../publicJS/textConverter/index");
const { convertToUpperCase, convertToLowerCase } = textConvert;
const folderManager = require("../publicJS/folderManager");
const { createFolder, deleteFolder } = folderManager;

const conn = require("../database/db");
const { json } = require("body-parser");
const dml = ["pattern", "list", "add", "update", "delete"];

//Aysnc Router Apis Part

//Pattern
router.get(`/${routerName}/${dml[0]}`, async (req, res, next) => {
  const data = {
    pID: "Varcahar45",
    pSellerID: "Varcahar10",
    pTitle: "Varcahar45",
    pDescription: "Varcahar850",
    pIntroduce: "Varcahar100",
    pMaterial:"Json",
    pSize: "Varcahar45",
    pColor: "Varcahar45",
    pCategori: "Varcahar45",
    pImages: "Json",
    pSeason: "Varcahar45",
    pTotal: "int",
    pPrice: "VARCHAR(60)",
  };
  res.send(JSON.stringify(data));
});

//list
router.get(`/${routerName}/${dml[1]}`, async (req, res, next) => {
  const SP = `Call SP_${convertToUpperCase(dml[1])}_${convertToUpperCase(
    routerName
  )}`;
  conn.query(SP, (error, result) => {
    if (error) {
      next();
      return;
    } else {
      res.send(JSON.stringify(result[0]));
    }
  });
});

//add
router.post(`/${routerName}/${dml[2]}`, async (req, res, next) => {
  const {
    pSellerID,
    pTitle,
    pDescription,
    pIntroduce,
    pMaterial,
    pSize,
    pColor,
    pCategori,
    pImages,
    pSeason,
    pTotal,
    pPrice,
  } = req.body;

  const pMaterialJson = JSON.stringify(pMaterial);
  const pImagesiJSON = JSON.stringify(pImages);

  const SP = `call ecommerceshop.SP_${convertToUpperCase(
    dml[2]
  )}_${convertToUpperCase(routerName)}(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  conn.query(
    SP,
    [
      pSellerID,
      pTitle,
      pDescription,
      pIntroduce,
      pMaterialJson,
      pSize,
      pColor,
      pCategori,
      pImagesiJSON,
      pSeason,
      pTotal,
      pPrice,
    
    ],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.send("Item Added Successfully . . .");
      }
    }
  );
});

//update
router.put(`/${routerName}/${dml[3]}`, async (req, res, next) => {
  const {
    pID,
    pTitle,
    pDescription,
    pIntroduce,
    pMaterial,
    pSize,
    pColor,
    pCategori,
    pImages,
    pSeason,
    pTotal,
    pPrice,
  } = req.body;

  const pMaterialJson = JSON.stringify(pMaterial);
  const pImagesiJSON = JSON.stringify(pImages);

  const SP = `call ecommerceshop.SP_${convertToUpperCase(
    dml[3]
  )}_${convertToUpperCase(routerName)}(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;
  conn.query(
    SP,
    [
      pID,
      pTitle,
      pDescription,
      pIntroduce,
      pMaterialJson,
      pSize,
      pColor,
      pCategori,
      pImagesiJSON,
      pSeason,
      pTotal,
      pPrice,
    ],
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.send(`Item ${dml[3]} Successfully . . .`);
      }
    }
  );
});

//Delete
router.delete(`/${routerName}/${dml[4]}/:id`, async (req, res, next) => {
  const pID = req.params.id;
  const SP = `call ecommerceshop.SP_${convertToUpperCase(
    dml[4]
  )}_${convertToUpperCase(routerName)} (?) `;
  conn.query(SP, [pID], (error, result) => {
    if (error) {
      throw error;
    } else
    res.send(`Item ${dml[4]}ed Successfully . . .`);
  });
});



//get by ID
router.get(`/${routerName}/:id`, async (req, res, next) => {
  const pID = req.params.id;
  const SP = `call ecommerceshop.SP_SELECT_PRODUCTS(?);`
  conn.query(SP, [pID], (error, result) => {
    if (error) {
      throw error;
    } else
    res.send(result[0]);
  });
});

module.exports = router;

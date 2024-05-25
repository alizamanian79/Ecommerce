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
    pMaterial: "Json",
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
    } else res.send(`Item ${dml[4]}ed Successfully . . .`);
  });
});

//get by ID
router.get(`/${routerName}/:id`, async (req, res, next) => {
  const pID = req.params.id;
  const SP = `call ecommerceshop.SP_SELECT_PRODUCTS(?);`;
  conn.query(SP, [pID], (error, result) => {
    if (error) {
      throw error;
    } else res.send(result[0]);
  });
});

//Buy Process
router.get(`/${routerName}/buy/help`, (req, res) => {
  const help = `
  const data = {
    basket: [
        { pID: "2VSkOiNmiI", value: 5 },
        { pID: "E4bpJ4QuFZ", value: 5 }
    ]
  };
  
  fetch('http://your-server-url/your-api-endpoint/buy', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  })
  `;
  res.send(help);
});

router.get(`/${routerName}/search/:name`, (req, res) => {
  const name = req.params.name;
  const sql = `CALL ecommerceshop.SP_SEARCH_PRODUCT(?)`;
  conn.query(sql, [name], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
    const dt= result[0]
      res.status(200).send(dt[0]);
    }
  });
});


//buy
router.post(`/${routerName}/buy`, async (req, res, next) => {
  const data = req.body.basket;
  const SP = `call ecommerceshop.SP_BUY_PRODUCTS(?, ?)`;
  let status = [];

  for (let j = 0; j < data.length; j++) {
    try {
      const result = await handelChecking(data[j].pID, data[j].value);
      status.push(result);
    } catch (error) {
      console.error(error);
    }
  }

  for (let i = 0; i < status.length; i++) {
    if (status[i] === false) {
      let message =
        "There was a problem with your basket. Please check your items.";
      return res.status(400).send(message);
    }
  }

  // If no errors, proceed with buying products
  for (let i = 0; i < data.length; i++) {
    conn.query(SP, [data[i].pID, data[i].value], (error, result) => {
      if (error) {
        throw error;
      } else {
        console.log("Product bought successfully");
      }
    });
  }

  res.status(200).send("All products bought successfully");
});

async function handelChecking(pID, value) {
  return new Promise((resolve, reject) => {
    const SP = `call ecommerceshop.SP_SELECT_PRODUCTS(?);`;
    conn.query(SP, [pID], (error, result) => {
      if (error) {
        reject(error);
      } else {
        const res = result[0];
        const total = res[0].pTotal;

        if (total - value < 0 || value > total) {
          resolve(false);
        } else {
          resolve(true);
        }
      }
    });
  });
}

module.exports = router;

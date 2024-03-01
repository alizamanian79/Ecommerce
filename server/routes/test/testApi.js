const routerName="products";
const express = require('express');
const router =express.Router();
const createFolder = require('../../publicJS/createFolder/index');


//CreateFolder
router.post('/createFolder', async(req, res) => {
    createFolder('myFolder', `uploads/`, res);
});



module.exports=router;
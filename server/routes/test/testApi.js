const routerName="products";
const express = require('express');
const router =express.Router();

const folderManager =require("../../publicJS/folderManager/index")
const {createFolder,deleteFolder} = folderManager;


//CreateFolder
router.post('/createFolder', async(req, res) => {
   createFolder('myFolder', `uploads/`, res)
});


//Delete Folder
router.post('/deleteFolder', async(req, res) => {
    deleteFolder('myFolder', `uploads/`, res)
 });
 


module.exports=router;
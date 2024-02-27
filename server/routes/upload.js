const express = require('express');
const router = express.Router();
const createFolder = require('../publicJS/createFolder/index');



router.post('/test', (req, res) => {
res.send('Hi')
});



router.post('/create', async(req, res) => {
  createFolder('myFolder', `uploads/`, res);
});

// const createFolder = async(folderNameParam, folderPathParam, res)=>{
//   const folderName = folderNameParam;
//   const folderPath = path.join(__dirname, '..', folderPathParam, folderName);

//   fs.mkdir(folderPath, { recursive: true }, (err) => {
//     if (err) {
//       console.error('Failed to create the folder:', err);
//       res.status(500).send({ message: 'Failed to create the folder' });
//     } else {
//       console.log('The folder has been created successfully');
//       res.send({ message: 'Folder created successfully', folderPath: folderPath });
//     }
//   });
// }



module.exports = router;
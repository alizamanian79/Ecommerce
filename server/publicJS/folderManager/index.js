const path = require('path');
const fs = require('fs');

const folderManager = {

  createFolder: async (folderNameParam, folderPathParam, res) => {
    const folderName = folderNameParam;
    const folderPath = path.join(__dirname, '..', folderPathParam, folderName);

    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Failed to create the folder:', err);
        res.status(500).send({ message: 'Failed to create the folder' });
      } else {
        console.log('The folder has been created successfully');
        res.send({ message: 'Folder created successfully', folderPath: folderPath });
      }
    });
  },

  deleteFolder: async (folderNameParam, folderPathParam, res) => {
    const folderName = folderNameParam;
    const folderPath = path.join(__dirname, '..', folderPathParam, folderName);

    fs.rmdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Failed to delete the folder:', err);
        res.status(500).send({ message: 'Failed to delete the folder' });
      } else {
        console.log('The folder has been deleted successfully');
        res.send({ message: 'Folder deleted successfully', folderPath: folderPath });
      }
    });
  },


};

module.exports = folderManager;

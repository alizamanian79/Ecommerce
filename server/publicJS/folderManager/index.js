const path = require('path');
const fs = require('fs');

const folderManager = {
  createFolder: async (folderNameParam, folderPathParam, res) => {
    const folderName = folderNameParam;
    const folderPath = path.join(__dirname, '..', folderPathParam, folderName);

    if (fs.existsSync(folderPath)) {
      console.log('The folder already exists');
    } else {
      fs.mkdir(folderPath, { recursive: true }, (err) => {
        if (err) {
          console.error('Failed to create the folder:', err);
        } else {
          console.log('The folder has been created successfully');
        }
      });
    }
  },

  deleteFolder: async (folderNameParam, folderPathParam, res) => {
    const folderName = folderNameParam;
    const folderPath = path.join(__dirname, '..', folderPathParam, folderName);

    fs.rmdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Failed to delete the folder:', err);
      } else {
        console.log('The folder has been deleted successfully');
      }
    });
  },
};

module.exports = folderManager;

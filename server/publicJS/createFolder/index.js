const path = require('path');
const fs = require('fs');

const createFolder = async (folderNameParam, folderPathParam, res) => {
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
};

module.exports = createFolder;
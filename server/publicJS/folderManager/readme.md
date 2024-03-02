First, you should install fs , path and express into your backend project:

```shell
npm i fs path
```

Seccond , Create uploads folder into your root direction.

Third , require createFolder into your Router

```shell
const folderManager =require("../../publicJS/folderManager/index")
const {createFolder,deleteFolder} = folderManager;
```

and use it like this in your Router:

```shell

//CreateFolder
router.post('/createFolder', async(req, res) => {
   createFolder('myFolder', `uploads/`, res)
});


//Delete Folder
router.post('/deleteFolder', async(req, res) => {
    deleteFolder('myFolder', `uploads/`, res)
 });

```

Finally add the middleware into your mainJs server to accessing File and folder

```shell
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

```

const glob = require("glob");
const multer = require('multer');
const Resize = require('./resize');

exports.upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  }
});

exports.addImage = async (req, res) => {

     try {
      const imagePath = ('./public/images');
      const fileUpload = new Resize(imagePath);
      const filename = await fileUpload.save(req.file.buffer);
      res.status(201); 
      } catch (e) {
         res.sendStatus(500);
       }
    };

exports.getImages = async (req, res) => {
  try {
    glob("public/images/*", async (er, files) => {
      let map= [];
      map = files.map(i => i.slice(14));
      res.send(map);
      })
      res.status(200); 
      } catch (e) {
          res.sendStatus(500);
      }
  }



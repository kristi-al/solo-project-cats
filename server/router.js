const router = require('express').Router();
const controller = require('./controller/index.js');


router.put('/image', controller.upload.single('file'), controller.addImage);
router.get('/images', controller.getImages);



module.exports = router;
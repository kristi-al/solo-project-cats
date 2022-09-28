const router = require('express').Router();
const imageController = require('./controller/image.js');
const userController = require('./controller/user.js');
const authMiddleware = require('./middlewares/auth');

router.put('/image', imageController.upload.single('file'), imageController.addImage);
router.get('/images', imageController.getImages);
router.post('/register', userController.addUser);
router.post('/login', userController.login);
router.post('/logout', authMiddleware, userController.logout);

module.exports = router;
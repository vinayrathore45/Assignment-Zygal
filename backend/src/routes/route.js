const router = require('express').Router();
const{registerUser,loginUser}   = require('../controllers/userController');
const{newText,searchedText}  = require('../controllers/homePageController');


router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.post('/newText',newText);
router.get('/searchText',searchedText);

module.exports = router
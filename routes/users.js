// const express=require('express');
// const router=express();

// const userController=require('../controllers/user_controller');
// router.get('/profile',userController.profile);
// module.exports=router;



const express=require('express');
const { use } = require('.');
const router=express.Router();
const userController=require('../controllers/user_controller');
router.get('/profile',userController.profile);
router.get('/',userController.home);
module.exports=router;
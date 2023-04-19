const express=require('express')
const router=express.Router();
const {userSignup,userLogin}=require('../controller/user-controller')
const {getProducts}=require('../controller/products-controller')
router.post('/signup',userSignup);
router.post('/login',userLogin);

router.get('/products',getProducts)
module.exports=router; 
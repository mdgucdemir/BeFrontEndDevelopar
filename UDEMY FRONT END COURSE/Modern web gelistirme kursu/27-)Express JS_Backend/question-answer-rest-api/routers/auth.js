// ilk once express rout olusturucaz
const express = require('express');
const {register,tokentest} = require('../controllers/auth');
const {getAccessToRoute} = require("../middlewares/authorization/auth");

// [api/auth] yonlendirmesi buraya gelecek
const router = express.Router(); // router i tanimlama

router.post("/register",register);
router.get("/tokentest",getAccessToRoute,tokentest);

// router.get("/register", (req,res) =>{
//     res.send("Auth Register Page");
// });

// sever.js de kullanabilmek icin bu router imiz
module.exports = router;
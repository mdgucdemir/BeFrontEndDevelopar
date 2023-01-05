// ilk once express rout olusturucaz
const express = require('express');
const {register} = require('../controllers/auth');
// [api/auth] yonlendirmesi buraya gelecek
const router = express.Router(); // router i tanimlama

router.post("/register",register);

// router.get("/register", (req,res) =>{
//     res.send("Auth Register Page");
// });

// sever.js de kullanabilmek icin bu router imiz
module.exports = router;
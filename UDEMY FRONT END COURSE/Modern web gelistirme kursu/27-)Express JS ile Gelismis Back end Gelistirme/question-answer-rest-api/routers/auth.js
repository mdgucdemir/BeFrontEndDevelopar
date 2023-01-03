// ilk once express rout olusturucaz
const express = require('express');
// [api/auth] yonlendirmesi buraya gelecek
const router = express.Router(); // router i tanimlama

router.get("/", (req,res) => {
    res.send("Auth Home Page");
});

router.get("/register", (req,res) =>{
    res.send("Auth Register Page");
});

// sever.js de kullanabilmek icin bu router imiz
module.exports = router;
const express = require('express');
// [api/question] yonlendirmesi buraya gelecek
const router = express.Router();

router.get("/", (req,res) =>{
    res.send("Question Home Page");
});

router.get("/delete", (req,res) =>{
    res.send("Question Delete Page")
});

// Router imizi export etmeliyiz server.js de kullanmak icin
module.exports = router;
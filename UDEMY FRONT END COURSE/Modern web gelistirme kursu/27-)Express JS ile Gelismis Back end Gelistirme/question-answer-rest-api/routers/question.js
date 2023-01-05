const express = require('express');
// [api/question] yonlendirmesi buraya gelecek
const router = express.Router();

router.get("/", (req,res) =>{
    // res.send("<h1>Question Home Page</h1>");
    res.status(404).json({
        success : false
    })
});

router.get("/delete", (req,res) =>{
    res.send("Question Delete Page")
});

// Router imizi export etmeliyiz server.js de kullanmak icin
module.exports = router;
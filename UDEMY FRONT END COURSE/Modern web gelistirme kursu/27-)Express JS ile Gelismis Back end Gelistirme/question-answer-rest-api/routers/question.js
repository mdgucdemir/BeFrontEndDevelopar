const express = require('express');
// [api/question] yonlendirmesi buraya gelecek
const {getAllQuestions} = require('../controllers/question');
const router = express.Router();

router.get("/",getAllQuestions);

// router.get("/delete", (req,res) =>{
//     res.send("Question Delete Page")
// });

// Router imizi export etmeliyiz server.js de kullanmak icin
module.exports = router;
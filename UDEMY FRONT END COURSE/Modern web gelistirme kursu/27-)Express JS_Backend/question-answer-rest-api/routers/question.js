const express = require('express');
// [api/question] yonlendirmesi buraya gelecek
const {askNewQuestion} = require('../controllers/question');
const {getAccessToRoute} = require("../middlewares/authorization/auth");
const router = express.Router();

router.post("/ask",getAccessToRoute,askNewQuestion);

// router.get("/delete", (req,res) =>{
//     res.send("Question Delete Page")
// });

// Router imizi export etmeliyiz server.js de kullanmak icin
module.exports = router;
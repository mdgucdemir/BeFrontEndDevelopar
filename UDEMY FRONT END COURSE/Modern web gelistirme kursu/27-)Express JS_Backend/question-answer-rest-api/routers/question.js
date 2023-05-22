const express = require('express');
// [api/question] yonlendirmesi buraya gelecek
const {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion
} = require('../controllers/question');

const {checkQuestionExist} = require("../middlewares/database/databaseErrorHelpers");
const {getAccessToRoute} = require("../middlewares/authorization/auth");
const router = express.Router();

router.post("/ask",getAccessToRoute,askNewQuestion);
router.get("/:id",checkQuestionExist,getSingleQuestion);
router.get("/",getAllQuestions);

// router.get("/delete", (req,res) =>{
//     res.send("Question Delete Page")
// });

// Router imizi export etmeliyiz server.js de kullanmak icin
module.exports = router;
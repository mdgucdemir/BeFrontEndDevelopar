const express = require('express');
// [api/question] yonlendirmesi buraya gelecek
const {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion
} = require('../controllers/question');

const {checkQuestionExist} = require("../middlewares/database/databaseErrorHelpers");
const {getAccessToRoute, getQuestionOwnerAccess} = require("../middlewares/authorization/auth");
const router = express.Router();

router.post("/ask",getAccessToRoute,askNewQuestion);
router.get("/:id",checkQuestionExist,getSingleQuestion);
router.get("/",getAllQuestions);
router.put("/:id/edit",[getAccessToRoute,checkQuestionExist,getQuestionOwnerAccess],editQuestion);

// router.get("/delete", (req,res) =>{
//     res.send("Question Delete Page")
// });

// Router imizi export etmeliyiz server.js de kullanmak icin
module.exports = router;
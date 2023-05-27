
const express = require("express");

const {getAccessToRoute} = require("../middlewares/authorization/auth");
const {
    addNewAnswerToQuestion,
    getAllAnswersByQuestion,
    getSingleAnswer
} = require("../controllers/answer");

const {CheckQuestionAndAnswerExist} = require("../middlewares/database/databaseErrorHelpers");


const router = express.Router({mergeParams:true});
// ust router daki params lari alt router a gecirmek icin {mergeParams:true} yapisini kullanmaliyiz [merge: birlestimek | params: parametre]

router.post("/" ,getAccessToRoute,addNewAnswerToQuestion);
router.get("/" ,getAllAnswersByQuestion);
router.get("/:answer_id" ,CheckQuestionAndAnswerExist,getSingleAnswer);

module.exports = router;
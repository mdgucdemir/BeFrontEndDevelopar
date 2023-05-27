
const express = require("express");

const {getAccessToRoute} = require("../middlewares/authorization/auth");
const {
    addNewAnswerToQuestion,
    getAllAnswersByQuestion,
    getSingleAnswer,
    editAnswer,
    deleteAnswer
} = require("../controllers/answer");

const {CheckQuestionAndAnswerExist} = require("../middlewares/database/databaseErrorHelpers");
const {getAnswerOwnerAccess} = require("../middlewares/authorization/auth");


const router = express.Router({mergeParams:true});
// ust router daki params lari alt router a gecirmek icin {mergeParams:true} yapisini kullanmaliyiz [merge: birlestimek | params: parametre]

router.post("/" ,getAccessToRoute,addNewAnswerToQuestion);
router.get("/" ,getAllAnswersByQuestion);
router.get("/:answer_id" ,CheckQuestionAndAnswerExist,getSingleAnswer);
router.put("/:answer_id/edit" ,[CheckQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],editAnswer);
router.delete("/:answer_id/delete" ,[CheckQuestionAndAnswerExist,getAccessToRoute,getAnswerOwnerAccess],deleteAnswer);

module.exports = router;
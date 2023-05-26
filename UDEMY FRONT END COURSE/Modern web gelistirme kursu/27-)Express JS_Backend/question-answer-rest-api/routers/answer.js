
const express = require("express");

const {getAccessToRoute} = require("../middlewares/authorization/auth");
const {addNewAnswerToQuestion} = require("../controllers/answer");



const router = express.Router({mergeParams:true});
// ust router daki params lari alt router a gecirmek icin {mergeParams:true} yapisini kullanmaliyiz [merge: birlestimek | params: parametre]

router.post("/" ,getAccessToRoute,addNewAnswerToQuestion);

module.exports = router;
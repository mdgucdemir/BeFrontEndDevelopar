
const Question = require("../models/Question");
const Answer = require("../models/Answer");

const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const addNewAnswerToQuestion = asyncErrorWrapper(async (req,res,next) => {
    // BURADA YAPILACAK ISLEMLER
    // 1- Answer ==> Answer model olarak eklemek
    // 2- Answer in olusan answer in Id sini question icinde ki answers in icine eklemek

    const {question_id} = req.params;
    const user_id = req.user.id;
    const information = req.body;

    const answer = await Answer.create({
        ...information,
        question: question_id,
        user: user_id
    });
    return res.status(200)
    .json({
        success: true,
        data: answer
    });

});

const getAllAnswersByQuestion = asyncErrorWrapper(async (req,res,next) => {
    
    const {question_id} = req.params;
    const question = await Question.findById(question_id).populate("answers"); // [populate] yontemi buradaki id si verilenin o id ye bagli tum bilgilerini vermemize yaradi
    const answers = question.answers;

    return res.status(200)
    .json({
        success: true,
        count : answers.length, // answers array inin uzunlugunu olcmek icin, Yani kac tane cevap var onu bullmamiza yariyor
        data: answers
    });
});

const getSingleAnswer = asyncErrorWrapper (async (req,res,next) => {
    
    const {answer_id} = req.params;
    const answer = await Answer
    .findById(answer_id)
    .populate(
        {
            path: "question", // nereyi populate edecek
            select: "title"   // neyi secmek istiyoru
        }
    )
    .populate(
        {
            path: "user",
            select: "name profile_image"
        }
    ); // populate i bu sekilde ozellestire bilir. Istedigimizi seyi secip cikti olarak verebiliriz || Ayrica Default olarak id ler (question ve user icin) gelicek

    return res.status(200)
    .json({
        success: true,
        data: answer
    })
});

module.exports = {
    addNewAnswerToQuestion,
    getAllAnswersByQuestion,
    getSingleAnswer
}
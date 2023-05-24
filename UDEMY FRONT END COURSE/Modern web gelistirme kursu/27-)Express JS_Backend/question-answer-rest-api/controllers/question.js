
const Question = require("../models/Question");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const askNewQuestion = asyncErrorWrapper(async (req,res,next) => {

    const information = req.body;

    const question = await Question.create({
        ...information,        
        user: req.user.id
    });

    res.status(200)
    .json({
        success: true,
        data : question
    });

});

const getAllQuestions = asyncErrorWrapper(async (req,res,next) => {
    
    const questions = await Question.find(); // all Questions 
    return res.status(200)
    .json({
        success: true,
        data : questions
    });
});

const getSingleQuestion = asyncErrorWrapper(async (req,res,next) => {
    
    const {id} = req.params;
    const question = await Question.findById(id); // single Question

    return res.status(200)
    .json({
        success: true,
        data: question
    });
});

const editQuestion = asyncErrorWrapper(async (req,res,next) => {
    
    const {id} = req.params;
    const {title,content} = req.body;

    let question = await Question.findById(id);

    question.title = title;
    question.content = content;

    question = await question.save();

    return res.status(200)
    .json({
        success: true,
        data: question
    });
});

const deleteQuestion = asyncErrorWrapper(async (req,res,next) => {
    
    const {id} = req.params;
    await Question.findByIdAndDelete(id);

    return res.status(200)
    .json({
        success: true,
        message: "Question Delete Operation successful"
    })
});

const likeQuestion = asyncErrorWrapper(async (req,res,next) => {
    
    const {id} = req.params;
    const question = await Question.findById(id);

    // Giris yapmis kullanici buraya Like etmis ise bir daha like edemesin
    if (question.likes.includes(req.user.id)) { // question daki like array indeki id giris yapan id ile esit ise
        return next(new CustomError("You already liked this question",400));
    }
    // eger id , likes in icerisinde yoksa push ile eklememiz gerekiyor
    question.likes.push(req.user.id);

    await question.save();
    return res.status(200)
    .json({
        success: true,
        data: question
    });
});

module.exports = {
    askNewQuestion,
    getAllQuestions,
    getSingleQuestion,
    editQuestion,
    deleteQuestion,
    likeQuestion
}
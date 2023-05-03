
const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {validateUserInput,comparePassword,compareEmail} = require("../helpers/input/inputHelpers");

const register = asyncErrorWrapper(async (req,res,next) => {
    // Normal de Buraya POST DATA gelicek
    
             
    const {name,email,password,role} = req.body;
     
        const user = await User.create({
        
            // name: name,
            // email: email,
            // password: password
    
            // // ES6 ile gelen yenilikler sayesinde yukarida yazilani daha kisa bir sekilde yazmak su sekilde olucak
            name,
            email,
            password,
            role
    
            // ilk yazimda ayni sekilde olan yazimlarda bu sekilde code yazilabilir
        });    
           
        
});

const login = asyncErrorWrapper(async(req,res,next) =>{

    const {email,password} = req.body;
    
    if(!validateUserInput(email,password)) {
        return next(new CustomError("Please check your inputs",400));
    }

    const user = await User.findOne({email}).select("+password");

    if (!comparePassword(password,user.password)){
        return next(new CustomError("Please check your password",400));
    }

   
    sendJwtToClient(user,res); 
});

const getUser = (req,res,next) => {
    res.json({
        success: true,
        data: {
            id: req.user.id,
            name: req.user.name
        }
    });
    
}


module.exports = {
    register,
    login,
    getUser   
}
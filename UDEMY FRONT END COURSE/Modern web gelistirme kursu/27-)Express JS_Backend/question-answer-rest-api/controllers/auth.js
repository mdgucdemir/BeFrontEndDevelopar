
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

const logout = asyncErrorWrapper(async(req,res,next) => {

    // logout isleminde tokenlarimizi silmemiz gerekiyor, yapmamiz gereken islem sadece bu kadar
    // Cookie den ve enviorment tan access_token i silmemiz gerekicek

    const {NODE_ENV} = process.env;
    
    return res.status(200)
    .cookie({
        httpOnly: true,
        expires: new Date(Date.now()),
        secure: NODE_ENV === "development" ? false: true
    }).json({
        success: true,
        message: "Logout successful"
    })
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

const imageUpload = asyncErrorWrapper(async (req,res,next) => {

    // data image upload

    const user = await User.findByIdAndUpdate(req.user.id,{
        "profile_image" : req.savedProfileImage
    },{
        new: true,
        runValidators: true
    })

    res.status(200)
    .json({
        success:true,
        message: "image upload is ok",
        data: user
    });
});

module.exports = {
    register,
    login,
    logout,
    getUser,
    imageUpload   
}
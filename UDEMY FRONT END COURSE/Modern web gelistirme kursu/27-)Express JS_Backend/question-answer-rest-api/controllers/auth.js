
const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const {validateUserInput,comparePassword} = require("../helpers/input/inputHelpers");
const sendEmail = require("../helpers/libraries/sendEmail");

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

        res
        .status(200)
        .json({
            success: true,
            data: user
        })
           
        
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

// -- Forgot Password -- 

const forgotPassword = asyncErrorWrapper(async (req,res,next) => {
    
    const resetEmail = req.body.email;

    const user = await User.findOne({email: resetEmail});

    if(!user) {
        return next(new CustomError("There is no user with that email",400));
    }

    const resetPasswordToken = user.getResetPasswordTokenFromUser();

    await user.save();


    const resetPasswordUrl = `http://localhost:5000/api/auth/resetpassword?resetPasswordToken=${resetPasswordToken}`;

    const emailTemplate = `
    <h3>Reset Your Password</h3>
    <p> This <a href = '${resetPasswordUrl}' target = '_blank'>Link</a> will expire in 1 hour</p>
    `;

    // Burada hatayi kendimiz yakalamak istiyoruz o yuzden CUSTOM ERROR yerine [ try - catch ] yapisini kullandik
    try {
        await sendEmail({
            from : process.env.SMTP_USER,
            to : resetEmail,
            subject : "Reset Your Password",
            html : emailTemplate
        });

        return res.status(200).json({
            success: true,
            message: "Token sent to your email"
        });
    }
    catch {
        // Eger hata yakalamayi merkezi bir yerden(custom Error) gerceklistirse idik asagidaki islemleri gerceklestiremezdik. O yuzden try-catch
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return next(new CustomError("Email Could Not Be sent",500));
    }

    
   
});

const resetPassword = asyncErrorWrapper(async(req,res,next) => {

    // token i query den alma
    const {resetPasswordToken} = req.query;

    // yeni password i req.body den alma
    const {password} = req.body;

    if(!resetPasswordToken) { // resetPasswordToken gonderilip gonderilmediginin konrolu
        return next(new CustomError("Please provide a valid token"),400);
    }

    let user = await User.findOne({
        resetPasswordToken : resetPasswordToken,
        resetPasswordExpire : {$gt : Date.now()} // [ mongoDb ozelligi ] => $gt [ greater than ] demek. Bu da resetPasswordExpire Date.now dan buyukse getir demek oluyor
    });

    // Eger token gecerli degilse
    if(!user) {
        return next(new CustomError("Invalid Token or Session Expired",400));
    }

    user.password = password; // yeni password u guncelleme

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    // User i guncellendi ve veri tabanina yazmamiz lazim
    await user.save();

    return res.status(200)
    .json({
        success: true,
        message: "Reset password process successful"
        
    });
});

module.exports = {
    register,
    login,
    logout,
    getUser,
    imageUpload,
    forgotPassword,
    resetPassword   
}
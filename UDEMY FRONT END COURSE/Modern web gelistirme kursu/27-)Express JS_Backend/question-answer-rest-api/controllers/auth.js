
const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient } = require("../helpers/authorization/tokenHelpers");

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

        // kayit islemi bittikten sonra buradaki (user ve res(response)) [sendJwtToClient] a gondermemiz gerekiyor
        sendJwtToClient(user,res);
        
        
});

const tokentest = (req,res,next) => {
    res.json({
        success: true,
        message: "wellcome"
    });
}


module.exports = {
    register,
    tokentest    
}
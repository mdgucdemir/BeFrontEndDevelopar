
const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const register = asyncErrorWrapper(async (req,res,next) => {
    // Normal de Buraya POST DATA gelicek
    
             
     
        const user = await User.create({
        
            // name: name,
            // email: email,
            // password: password
    
            // // ES6 ile gelen yenilikler sayesinde yukarida yazilani daha kisa bir sekilde yazmak su sekilde olucak
            name,
            email,
            password
    
            // ilk yazimda ayni sekilde olan yazimlarda bu sekilde code yazilabilir
        });
        res.status(200).json({
            success: true,
            data: user
        });
    
        
});
const errorTest = (req,res,next) => {
    // some code

    // Question Does not Exist
    // return next(new TypeError("TypeError"));
    return next(new SyntaxError("Syntaxt Error"));

    // senkron bir code oldugu icin express bunu kendi icerisinde ki error-handling mekanizmasi sayesinde yakaliycak ve bize response umuzu donucek
    
    // some code
    
};


module.exports = {
    register,
    errorTest
}
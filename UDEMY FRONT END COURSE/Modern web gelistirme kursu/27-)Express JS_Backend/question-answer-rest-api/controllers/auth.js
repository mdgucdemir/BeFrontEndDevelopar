
const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");

const register = async (req,res,next) => {
    // Normal de Buraya POST DATA gelicek
    
    const name = "fosik lord";
    const email = "fosik@gmail.com";
    const password = "12345";

          
    try { // asenkron islemlerde error yakalama
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
    } catch (err) {
        return next(err); 
        // asenkron islemlerde herhangi bir sikinti olmamasi icin bunu (next) ile dondurmeliyiz
    }
   // async, await yap
}
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
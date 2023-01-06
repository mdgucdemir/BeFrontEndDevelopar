
const User = require("../models/user");

const register = async (req,res,next) => {
    // Normal de Buraya POST DATA gelicek
    const name = "fosik lord";
    const email = "fosik@gmail.com";
    const password = "12345";

    // async, await
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
}


module.exports = {
    register
}
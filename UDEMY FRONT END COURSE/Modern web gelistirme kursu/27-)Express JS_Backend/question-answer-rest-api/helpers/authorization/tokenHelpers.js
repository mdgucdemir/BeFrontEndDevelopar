const { parse } = require("dotenv");

const sendJwtToClient = (user,res) => {

    // Generete JWT
    // Bu Kisimda (User) modelimize gore Json Web Token(JWT) olusturucaz

    const token = user.generateJwtFromUser();

    const {JWT_COOKIE,NODE_ENV} = process.env; // NODE_ENV = [development] ise {Cookie} nin (secure) degerini (false), [production] ise (true) yapicaz
    

    return res
    .status(200)
    .cookie("acces_token",token,{
        httpOnly : true,
        expires : new Date(Date.now() + parseInt(JWT_COOKIE) * 1000),
        secure : NODE_ENV === "development" ? false : true // NODE_ENV "development" ise [false] degilse [true] kosullu yazimin YAZIM SEKLIDIR.
    })
    .json({
        success : true,
        access_token : token,
        data : {
            name : user.name,
            email : user.email
        }
    });

    // Response
    // Bu kisimda bir tane (response) dondurucez
}

const isTokenIncluded = (req) => {
    return (req.headers.authorization && req.headers.authorization.startsWith('Bearer:'));
}

const getAccessTokenFromHeader = (req) => {

    const authorization = req.headers.authorization;
    const acces_token = authorization.split(" ")[1];
    return acces_token;
}

module.exports = {
    sendJwtToClient,
    isTokenIncluded,
    getAccessTokenFromHeader
};

const CustomError = require("../../helpers/error/CustomError");
const jwt = require("jsonwebtoken");
const {isTokenIncluded,getAccessTokenFromHelpers, getAccessTokenFromHeader} = require("../../helpers/authorization/tokenHelpers");
const getAccessToRoute = (req,res,next) => {
    
    // token control
    // if no token, CustomError

    const {JWT_SECRET_KEY} = process.env;

    if(!isTokenIncluded(req)){
        // 401, 403 status
        // 401 unauthorized status (giris yapmadan bir sayfaya erismeye calismak gibi)
        // 403 forbidden status (giris yaptiniz,user siniz, ama adminlerin giris yapmasi gereken yere giris yapmaya cilistiginiz icin 403 forbiden hatasi alirsiniz)
        
        return next(new CustomError("You are not authorized to access this route",401));        
    }
    const accessToken = getAccessTokenFromHeader(req);
    

    jwt.verify(accessToken,JWT_SECRET_KEY,(err,decoded) => {
        
        if (err) {
            return next(new CustomError("You are not authorized to access this route",401));
        }
        req.user = {
            id: decoded.id,
            name: decoded.name
        }        
        next();
    });

}

module.exports = {
    getAccessToRoute
};
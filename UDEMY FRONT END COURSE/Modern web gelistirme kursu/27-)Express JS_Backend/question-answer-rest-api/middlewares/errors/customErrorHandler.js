
const CustomError = require("../../helpers/error/CustomError");
const customErrorHandler = (err,req,res,next) => {
    let customError = err;

    // console.log(err);
    
    if (err.name === "SyntaxError"){
        customError = new CustomError("Unexpected Syntaxt",400);
        
    }
    if (err.name ==="ValidationError"){
        customError = new CustomError(err.message, 400);
    }
    if (err.code === 11000){
        //duplicate key error
        customError = new CustomError("Duplicate Key Found : Probably your email used, Please use different email",400);
    }
    if (err.name === "CastError") {
        customError = new CustomError("This is Cast Error. Please provide a valid Id",400);
    }       
      

    res
    .status(customError.status || 500)
    .json({
        success: false,
        message: customError.message
    }); // kullanici tarifindan olan status hata kodu
}

// asenkron yapilarda hataliri [ try , catch ] yapilari ile yakalayabiliriz

module.exports = customErrorHandler;
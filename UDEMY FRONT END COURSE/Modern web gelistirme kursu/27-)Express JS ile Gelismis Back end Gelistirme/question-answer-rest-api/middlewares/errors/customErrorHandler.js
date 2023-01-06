
// Custom error handling yazicaz
const customErrorHandler = (err,req,res,next) => {
    console.log(err);

    res
    .status(400)
    .json({
        success: false
    }); // kullanici tarifindan olan status hata kodu
}

// asenkron yapilarda hataliri [ try , catch ] yapilari ile yakalayabiliriz

module.exports = customErrorHandler;
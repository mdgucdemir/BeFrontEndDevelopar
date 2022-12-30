const accessControl = (req,res,next) => {
    // console.log("middleware: Access Control");

    const access = true;
    if(!access) {
        res.status(401).json({
            success: false,
            message: "You are not authorized"
        });
    }

    next(); // bir sonraki asamaya gecmek icin (next function) i cagirmamiz gerekiyor
    // eger next metodunu yazmaz isek bir sonraki asamaya gecemez ve requestimiz surekli takili kalir
}

const defaultMiddleware = (req,res,next) => {
    console.log("Default Middleware");
    next();
}

module.exports = { // server.js de kullanmak icin export etmeliyiz
    accessControl,
    defaultMiddleware
};
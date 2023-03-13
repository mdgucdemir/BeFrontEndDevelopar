const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connecDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const routers = require("./routers/index");

// const question = require("./routers/question");
// const auth = require("./routers/auth");

// Environment Variables
dotenv.config({
    path: "./config/env/config.env"
});

// MongoDb connection
connectDatabase();

const app = express();

// Express - Body Middleware [console.log(req.body) nin undefined olmamasi, gonderdigimiz verileri (req.body) nin icerisinde yer alacak]
app.use(express.json());


const PORT = process.env.PORT;

//--- ROUTERS MIDDLEWARE BURANIN ALTINDA KULLANILACAK ----

app.use("/api",routers);

// app.use("/api/questions",question); // [app/questions] oldugunda yukarida tanimladigimiz (question) i dahil et demek
// app.use("/api/auth",auth);

//-----------------------------------------------

// ------- Error Handler ---------

/* [
    ugulamamiz icindeki herhangi bir code dan hatayi tek bir merkezi yerden yakalaya biliriz 
    bunun icin kendi custom error handler imizi yazabiliriz 
    bunu ayri bir middleware olarak yazmak cok guzel olur
    ornegin bir yere request yaptik bu ilk basta custom yazdigimiz error handling e gelmesi gerekiyor eger bir hata var ise bunu geri gondermeliyiz
    (err,req,res,next) "err" custom error handling yazdigimiz icin geliyor
] */

app.use(customErrorHandler);



// ------- Error Handler End---------

app.listen(PORT,() => {
    console.log(`App Started on ${PORT}: ${process.env.NODE_ENV}`);
}); // app i calistirma



// app.get("/api/questions", (req,res) => {
//     res.send("Questions Home Page");
// });

// app.get("/api/questions/delete", (req,res) =>{
//     res.send("Questions Delete Page");
// }); 

// app.get("/api/auth/", (req,res) => {
//     res.send("Auth Home Page");
// });

// app.get("/api/auth/register", (req,res) => {
//     res.send("Auth Register Page");
// });
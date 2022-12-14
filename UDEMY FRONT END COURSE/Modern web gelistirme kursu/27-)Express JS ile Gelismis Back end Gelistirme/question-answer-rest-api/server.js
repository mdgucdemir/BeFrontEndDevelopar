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
const PORT = process.env.PORT;

//--- ROUTERS MIDDLEWARE BURANIN ALTINDA KULLANILACAK ----

app.use("/api",routers);

// app.use("/api/questions",question); // [app/questions] oldugunda yukarida tanimladigimiz (question) i dahil et demek
// app.use("/api/auth",auth);

//-----------------------------------------------

// Error Handler
app.use(customErrorHandler);

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
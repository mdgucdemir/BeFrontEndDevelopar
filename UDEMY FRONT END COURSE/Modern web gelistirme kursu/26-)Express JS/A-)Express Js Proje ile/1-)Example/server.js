const express = require("express");
const {accessControl, defaultMiddleware} = require("./middleware");
const users = [
    {id : 1, name: "Mehmet Deniz Gucdemir", location : "Austin, TX"},
    {id : 2, name: "Edward Ocean", location : "San Francisco, CA"}
]; // json array i olusturduk

// tanimlanan express in constructor dan bir tane app olustur 
const app = express();

// web server in hangi port ta calisagini soyle
const PORT = 5000;
// app.use(accessControl); // middleware metodunu kullanmak icin (use) kullanilir

app.use(express.json()); // post request lerde gonderinin body de gorunmesini saglayan middleware

// Get Request
// localhost:5000/users (http:localhost:5000/users) (https: degil http:)
app.get("/users", [accessControl,defaultMiddleware],(req,res,next) => {
    // // req --> request
    // // res --> response
    // // next --> ileriki bir zamanda gorecegimiz bir function
    // res.send("<h1>Hello Express</h1>");

    res.json({
        success: true,
        data: users
    });
}); // bu function type in adi (request handler)

app.post("/users", (req,res,next) =>{
    // console.log(req.body);

    users.push(req.body);

    res.json({
        success: true,
        data: users
    });
});

// users/1
app.put("/users/:id", (req,res,next) => {

    // console.log(req.params.id); // id yi gormek icin
    const id = parseInt(req.params.id);

    for (let i=0; i < users.length; i++){
        if(users[i].id === id){
            users[i] = {
                ...users[i],
                ...req.body
            }
        }
    }

    res.json({
        success: true,
        data: users
    })
});

app.delete("/users/:id", (req,res,next) => {

    const id = parseInt(req.params.id);

    
    for (let i=0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i,1);
        }
    }

    res.json({
        success: true,
        data: users
    })
})

// app.get("/products",(req,res,next) => {
//     res.send("Products");
// });

app.listen(PORT, () => {
    console.log("Server Started PORT: " + PORT);
});

// basit bir web server olusturduk
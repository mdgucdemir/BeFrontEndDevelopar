const mongoose = require('mongoose'); // mongoose package kullanacagimiz icin ilk once mongoose u dahil etmeliyiz

const connectDatabase = () => {
    // bir helper function dur
    // bu function i (server.js) de kullanicaz

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("MongoDB cunnection Success");
    })
    .catch(err => {
        console.error(err);
    });
}

module.exports = connectDatabase;


const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,"Please give me a name"]// name alaninin gerekli oldugunu mutlaka girilmeisi gerektigini vurguladik        
    },
    email:{
        type: String,
        required: [true,"Please give me a email"],
        uniqe: [true,"Please try different email"], // Sadece bir tane email olucak, birden fazla email ile kayit islemi gerceklestirilmemesini istiyoruz.
        match: [
            //@gucdemir.com seklinde degilde bir email adresi seklinde olanlari kabul edicaz
            // bunun icin [mongoose email reg ex validation] seklinde internet ten arastir, hazir code kullan
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Please provide a valid email"
        ]
    },
    role: {//giris yapanin user mi yoksa admin mi oldugunu gostermek icin onemli
        type:String,
        default: "user",
        enum: ["user","admin"] // user veya admin rolu var. eger isterseniz bir kac tane ekleyebilirsiniz [superadmin] gibi          
    },
    password : {
        type: String,
        minlength: [6,"Please provide a password with min length: 6"],
        required: [true,"Please provide a password"],
        select: false // herhangi bir bilgiyi cektigimiz zaman password alaninin gorulmemsi icin yazilan bir code
    },
    createdAt: {
        // kullanicinin ne zaman kayit oldugu ile ilgili alan. Bu alan tarih icerir
        type: Date,
        default: Date.now // direk kayit oldugu tarihi almak icin 
    },
    title: {
        type: String
    },
    about: {
        type: String,
        
    },
    place: {
        type: String
    },
    website: {
        type: String
    },
    profile_image: {
        type: String,
        default: "default.jpg"
    },
    bloced: { // admin block lamis olabilir. Bunun icin Boolean bir deger alir (true,false)
        type: Boolean,
        default: false
    }
});

/*
   bu yapimiz model i [mongoose] kaydetmemiz ve disari export etmemiz gerekiyor. 
   mongoose a (User) olarak kayit edelim ve bu User a karsilik gelen schema da olusturdugumuz (UserSchema) olsun 
*/
module.exports = mongoose.model("User",UserSchema);

// biz bir tane User olusturursak database imizde (users) isminde bir collection olusacak
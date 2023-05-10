
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const crypto = require("crypto");


const UserSchema = new Schema({
    name: {
        type: String,
        required: [true,"Please give me a name"]// name alaninin gerekli oldugunu mutlaka girilmeisi gerektigini vurguladik        
    },
    email:{
        type: String,
        required: [true,"Please give me a email"],
        unique: true, // Sadece bir tane email olucak, birden fazla email ile kayit islemi gerceklestirilmemesini istiyoruz.
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
        select: false // herhangi bir bilgiyi cektigimiz zaman password alaninin gorulmemesi icin yazilan bir code
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
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpire: {
        type: Date
    }
});
// UserSchema Methods
UserSchema.methods.generateJwtFromUser = function(){

    /* 
    bize bir tane jwt [ secret_key ] ve [ expireIn (jwt nin ne zaman bitecegi time bilgisi gerekli) ] 
    bu bilgileri bir cok defa kullanicagimiz icin  bunu [ config.evn ] in icinde olusturacagiz 
    */
    const {JWT_SECRET_KEY,JWT_EXPIRE} = process.env;

    // JWT olusturmak icin ilk once Payload object olusturacagiz
    const payload = {
        id : this._id,
        name : this.name
    };
    // Token olusturma
    const token =jwt.sign(payload,JWT_SECRET_KEY,{
        //option 
        expiresIn : JWT_EXPIRE
        // and callback function
    });
    return token;
}

UserSchema.methods.getResetPasswordTokenFromUser = function() {

    const randomHexString = crypto.randomBytes(15).toString("hex");
    const {RESET_PASSWORD_EXPIRE} = process.env;

    const resetPasswordToken = crypto
    .createHash("SHA256")
    .update(randomHexString)
    .digest("hex");

    this.resetPasswordToken = resetPasswordToken;
    this.resetPasswordExpire = Date.now() + parseInt(RESET_PASSWORD_EXPIRE); 
    
    return resetPasswordToken;
}

// Pre hooks
UserSchema.pre("save",function(next){
    // Password Degismemis ise
    if (!this.isModified("password")) { // ( isModified ) Mongoose un kendi function i dir parantez icerisine modified edilip edilmedigini ogrenmek istedigimiz veriyi yaziyoruz
        next();
    }

    bcrypt.genSalt(10, (err, salt) => { // bcrypt asenkron version i kullandik burada 
        if (err) next(err); // eger hata var ise customErrorHandler.js e gidicek
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) next(err);
            this.password = hash;
            next();
        });
    });
});

/*
   bu yapimiz model i [mongoose] kaydetmemiz ve disari export etmemiz gerekiyor. 
   mongoose a (User) olarak kayit edelim ve bu User a karsilik gelen schema da olusturdugumuz (UserSchema) olsun 
*/
module.exports = mongoose.model("User",UserSchema);

// biz bir tane User olusturursak database imizde (users) isminde bir collection olusacak
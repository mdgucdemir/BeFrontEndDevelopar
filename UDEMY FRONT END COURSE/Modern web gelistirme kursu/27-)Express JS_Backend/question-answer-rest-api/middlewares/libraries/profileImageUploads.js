const multer = require("multer");
const path = require("path");
const CustomError = require("../../helpers/error/CustomError");

// [ Storage ] ayari yapilacak. Burada nereye kayit edilecegi ve hangi isimle kayit edilecegimizi belirleyecek 
// [ FileFilter ] ayari ise hangi dosyalari izin vericegimizi belirleyecek

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        // cb = callback
        // destination key imiz dosymaizi nereye kayit edecegini soylemek icin olusturduk
        // dosyamizi [ public/uploads ] a olusturacagiz bunun icin ilk once [ root directory ] bulmammiz gerekiyor
        const rootDir = path.dirname(require.main.filename);
        cb(null,path.join(rootDir,"/public/uploads"));
    },
    filename: function(req,file,cb){
        // file -mimetype -image/png
        const extention = file.mimetype.split("/")[1];
        req.savedProfileImage = "image_" + req.user.id + "." + extention;
        cb(null,req.savedProfileImage);
    }
});

// File FIlter
const fileFilter = (req,file,cb) => {
    // izin verdigimiz standart lari olusturacagiz

    let allowedMimeTypes = ["image/jpg","image/gif","image/png","image/jpeg"];
    if(!allowedMimeTypes.includes(file.mimetype)) {
        return cb(new CustomError("Please choose jpg, gif, png and jpeg",400),false);
    }
    return cb(null,true); // photo upload islemi devam etsin diye [true] dedik
    
};

const profileImageUpload = multer({storage,fileFilter}); // yukarida tanimlanan [storage ve filefilter] obje olarak olusturulan bir midleware olusturduk

module.exports = profileImageUpload;
// ilk once express rout olusturucaz
const express = require('express');
const {
    register,
    getUser,
    login, 
    logout, 
    imageUpload,
    forgotPassword,
    resetPassword,
    editDetails
} = require('../controllers/auth');

const {getAccessToRoute} = require("../middlewares/authorization/auth");
const profileImageUpload = require("../middlewares/libraries/profileImageUploads");

// [api/auth] yonlendirmesi buraya gelecek
const router = express.Router(); // router i tanimlama

router.post("/register",register);
router.post("/login",login);
router.get("/profile",getAccessToRoute,getUser);
router.get("/logout",getAccessToRoute,logout);
router.post("/forgotpassword",forgotPassword);
router.put("/resetpassword",resetPassword);

router.put("/edit",getAccessToRoute,editDetails);

router.post(
    "/upload",
    [getAccessToRoute,profileImageUpload.single("profile_image")],
    imageUpload
    );

// router.get("/register", (req,res) =>{
//     res.send("Auth Register Page");
// });

// sever.js de kullanabilmek icin bu router imiz
module.exports = router;
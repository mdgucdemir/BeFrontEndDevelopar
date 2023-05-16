

const express = require('express');
const {getAccessToRoute, getAdminAccess} = require("../middlewares/authorization/auth"); // admin islemlerinin yapilmasi icin ilk basta giris yapilmasini istiyoruz. Sonra Admin

const router = express.Router();

router.use([getAccessToRoute,getAdminAccess]); // 2 Middleware ard arda calismasini istedigimiz icin ikisini array icerisinde yazdik
// [ Block User, Delete User ] Admin in su an icin yapmasini istedigimiz 2 islem 

router.get("/",(req,res,next) => {
    
    res.status(200)
    .json({
        succes: true,
        message: "Admin Page"
    })
});

  



module.exports = router;
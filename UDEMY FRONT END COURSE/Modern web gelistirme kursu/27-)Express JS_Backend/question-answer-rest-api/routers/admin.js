

const express = require('express');
const {getAccessToRoute, getAdminAccess} = require("../middlewares/authorization/auth"); // admin islemlerinin yapilmasi icin ilk basta giris yapilmasini istiyoruz. Sonra Admin
const {blockUser,deleteUser} = require("../controllers/admin");
const {checkUserExist} = require("../middlewares/database/databaseErrorHelpers");

const router = express.Router();

router.use([getAccessToRoute,getAdminAccess]); // 2 Middleware ard arda calismasini istedigimiz icin ikisini array icerisinde yazdik
// [ Block User, Delete User ] Admin in su an icin yapmasini istedigimiz 2 islem 


router.get("/", (req,res,next) =>{res.status(200).json({
    success: true,
    message: "this is Admin page"
})});
router.get("/block/:id",checkUserExist,blockUser);
router.delete("/user/:id",checkUserExist,deleteUser);
  



module.exports = router;
// tum router larimizin ana dosyasi (main js) i olucak. Tum router yonlendirmalerimizi buradan yapicaz.
// (index.js) de bir router bir middleware olucak.

const express = require('express');
const question = require("./question");
const auth = require("./auth");

// /api geldininde 
const router = express.Router(); // express ten bir tane router olusturduk // bu kismi burada tanimlaman gerekiyor yoksa calismiyor
router.use("/questions",question);
router.use("/auth",auth);



module.exports = router; // modulu disari aktarma islemi 
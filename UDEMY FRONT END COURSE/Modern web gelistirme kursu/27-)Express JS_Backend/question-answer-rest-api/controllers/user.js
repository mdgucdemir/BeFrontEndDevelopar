
const User = require("../models/User1");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

const getSingleUser = asyncErrorWrapper(async (req,res,next) => {

    const {id} = req.params;
    const user = await User.findById(id);    

    return res.status(200)
    .json({
        success: true,
        data: user
    })

});

const getAllUsers = asyncErrorWrapper(async (req,res,next) => {
    
    const users = await User.find(); // [ find ] in icerisine birsey yazmaz isen {tum user} lari getirir

    return res.status(200)
    .json({
        success: true,
        data: users
    })
});

module.exports = {
    getSingleUser,
    getAllUsers
};
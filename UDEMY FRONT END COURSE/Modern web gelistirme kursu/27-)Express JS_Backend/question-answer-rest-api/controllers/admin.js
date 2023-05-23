
const User = require("../models/User1");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");


const blockUser = asyncErrorWrapper(async(req,res,next) => {   
    
    const {id} = req.params;   
    const user = await User.findById(id); 

    user.blocked = !user.blocked; // user block islemi

    await user.save();
    return res.status(200).json({
        succuss: true,
        message: "Block - UnBlock Succesfull"
    });
   
});

const deleteUser = asyncErrorWrapper(async(req,res,next) => {

    const {id} = req.params;
    const user = await User.findById(id);

    await user.remove(); // ilgili question lar [ model => User => {UserSchema.post remove} da ] silindi
    
    return res.status(200).json({
        succuss: true,
        message: "User Delete Process Successful"
    });
});

module.exports = {
    blockUser,
    deleteUser
};
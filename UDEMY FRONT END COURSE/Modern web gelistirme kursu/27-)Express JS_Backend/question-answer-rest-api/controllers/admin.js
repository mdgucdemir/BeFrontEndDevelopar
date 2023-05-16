
const User = require("../models/user");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");


const blockUser = asyncErrorWrapper(async(req,res,next) => {
    
    const {id} = req.params;   
    const user = await User.findById(id); 

    user.blocked = !user.blocked;

    await user.save();
    return res.status(200).json({
        succuss: true,
        message: "Block - UnBlock Succesfull"
    });
   
});

module.exports = {
    blockUser
};
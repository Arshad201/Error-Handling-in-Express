import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/userModel.js";
import { catchAsyncError } from "../middleware/catchAsyncError.js";

export const getUserDetails = catchAsyncError(async(req, res, next)=>{

    await User.create({
        name : 'Arshad',
        email : 'farzi@marzi.com'
    })

    res.status(201).json({
        success : true,
        message : 'User created successfully!'
    })

});
import mongoose from "mongoose";

export const conntectToDB = async ()=>{
    try {
        const {connection} = await mongoose.connect('mongodb://localhost:27017/errorHandling');

        console.log(`Connect with ${connection.host}`);

    } catch (error) {
        console.log(error);
    }
}

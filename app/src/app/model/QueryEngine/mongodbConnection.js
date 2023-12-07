import mongoose from "mongoose";

export const connectToMongoDB = async() => {
    try{
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect to mongoDB Successfully");
        return true;
    } catch (error){
        console.log("Fail to Connect tp mongoDB: ", error);
        return false;
    }
}
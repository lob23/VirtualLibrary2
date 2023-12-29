import { connectToMongoDB } from "./mongodbConnection";
import User from "../DatabaseManagement/userDatabase"
import { NextResponse } from "next/server";

export const getUserAccount = async(userEmail, userPassword) => {
    try{
        await connectToMongoDB();
        const user = await User.findOne({email: userEmail, password: userPassword}).select("name");
        console.log("user: ", user)
        return [NextResponse.json(user), user]
    } catch (error){
        console.log("get user Account failed: ", error)
    }
} 

export const addUserAccount = async(userEmail, userPassword, userName) => {
    try{
        await connectToMongoDB();
        const user = await User.create({
            name: userName,
            email: userEmail,
            password: userPassword,
        });
        return NextResponse.json({message: "User registered successfully"}, {status: 201});
    } catch (error){
        return NextResponse.json({message: "Add user account failed: "}, {status: 500});
    }
}
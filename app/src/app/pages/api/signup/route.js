import {NextResponse} from "next/server"
import {addUserAccount} from "@/app/model/QueryEngine/AccountQueryEngine"

export async function POST(req) {
    const {username, password} = await req.json();

    try {
        await addUserAccount("ABC", username, password)
        console.log("signup successfully: ")
    }catch (error){
        console.log("signup failed: ", error)
    }

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
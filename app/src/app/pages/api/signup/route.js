import {NextResponse} from "next/server"
import {signUp} from "@/app/model/QueryEngine/userQueryEngine"

export async function POST(req) {
    const {username, password} = await req.json();

    console.log("username", username);
    console.log("password", password);

    signUp(username, password)

    return NextResponse.json({msg: ["HI from signup/route.js"]});
}
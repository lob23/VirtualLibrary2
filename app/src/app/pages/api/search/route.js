import {NextResponse} from "next/server"

export async function POST(req) {
    const {username, password} = await req.json();

    console.log("username", username);
    console.log("password", password);

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
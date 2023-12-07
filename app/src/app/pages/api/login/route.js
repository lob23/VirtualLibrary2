'user client'
import {NextResponse} from "next/server"
import { redirect} from 'next/navigation';
import { getUserAccount } from "@/app/model/QueryEngine/AccountQueryEngine";

export async function POST(req) {
    const {username, password} = await req.json();

    try {
        await getUserAccount(username, password)
        console.log("login successfully ")
    }catch (error){
        console.log("login failed: ", error)
    }

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
'user client'
import {NextResponse} from "next/server"
import {login} from '@/app/model/QueryEngine/userQueryEngine'
import { redirect} from 'next/navigation';

export async function POST(req) {
    const {username, password} = await req.json();

    const isSuccessed = login(username, password)

    if(isSuccessed){
        redirect('http://localhost:3000/pages/home')
    } else {
        console.log("fails")
    }

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
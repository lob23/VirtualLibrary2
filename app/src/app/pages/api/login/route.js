'use client'
import {NextResponse} from "next/server"
import config from '../../../config'
import Router from "next/router";
import { redirect} from 'next/navigation';
import { getUserAccount } from "@/app/model/QueryEngine/AccountQueryEngine";

export async function POST(req) {
    const {username, password} = await req.json();
    // const router = useRouter()

    try {
        // const [user, status] = await getUserAccount(username, password)
        const queryString = config.BACKEND_URL + "/users/getUserByEmail/" + username;
        console.log(queryString)
        const user = await fetch(queryString)
                            .then(resposne => { return resposne.json()})
                            .catch(error => console.log("login failed: ", error))

        // Router.push('/pages/home')
        // redirect('/home')
        // console.log("User: s s ", user )

        // if (status != null){
        //     console.log("login successfully")
        // }else {
        //     console.log("login failed")
        // }

    }catch (error){
        console.log("login failed: ", error)
    }

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
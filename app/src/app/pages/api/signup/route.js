import {NextResponse} from "next/server"
import config from '../../../config'
import axios from "axios";

import {addUserAccount} from "@/app/model/QueryEngine/AccountQueryEngine"

export async function POST(req) {
    const user = await req.json();

    try {
        const queryString = config.BACKEND_URL + "/users/createUser";
        const res = axios.post(queryString, user)
            .then(response => {
                
                console.log('User created successfully:', response.data);
                if(response.data){
                    return response.data;
                } else {
                    return null
                }
            })
            .catch(error => {
                console.error('Error creating user:', error.response ? error.response.data : error.message);
            });
            
        return NextResponse.json(res)

    }catch (error){
        console.log("signup failed: ", error)
    }

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
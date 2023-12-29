import {NextResponse} from "next/server"
import config from '../../../config'

export async function POST(req) {
    const {username, password} = await req.json();
    try {
        // const [user, status] = await getUserAccount(username, password)
        const queryString = config.BACKEND_URL + "/users/getUserByEmail/" + username;

        const user = await fetch(queryString)
                            .then(resposne => { 
                                if (resposne != undefined){
                                    return resposne.json()
                                } else {
                                    return null
                                }   
                            })
                            .catch(error => console.log("login failed: ", error))

        return NextResponse.redirect(new URL('/pages/home', req.url))
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
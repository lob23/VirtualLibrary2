import {NextResponse} from "next/server"
import config from '../../../config'

export async function POST(req) {

    const content = await req.json()

    // this code is taken from login form. It should be replaced by the own code which will be implemented later.
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
        if (user != undefined){
            if (user.User_password == password){
                return NextResponse.json(user)
            } else {
                return NextResponse.json(null)
            }
        } else 
            return NextResponse.json(null)
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
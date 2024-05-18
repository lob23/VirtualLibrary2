import {NextResponse} from "next/server"
import config from '../../config'

//POST
export const postLogin = async (req) => {
    const {username, password} = req;
    try {
        // const [user, status] = await getUserAccount(username, password)
        //console.log("username: ", password);
        const queryString = config.BACKEND_URL + "/users/getUserByEmail/" + username;

        let user = await fetch(queryString);
        user = await user.json();
        if (user != undefined){
            if (user.User_password == password){
                return NextResponse.json(user)
            } else {
                return NextResponse.json(null)
            }
        } else 
            return NextResponse.json(null)
    }catch (error){
        console.log("login failed: ", error)
    }

    return NextResponse.json({msg: ["HI from contact/route.js"]});
}
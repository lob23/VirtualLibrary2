import {NextResponse} from "next/server"
import config from '../../config'
import axios from "axios";
//POST
export const postLogin = async (req) => {
    const {username, password} = req;
    try {
        // const [user, status] = await getUserAccount(username, password)
        // console.log("username: ", password);
        const queryString = config.BACKEND_URL + "/users/login/" + username;

        var user = await axios.get(queryString, {
            params: {
                password: password,
            },
        });

        console.log("user: ", user);

        if (user != null){
        
            return user.data;
        } else 
            return null;
    }catch (error){
        console.log("login failed: ", error)
        return null;
    }

}
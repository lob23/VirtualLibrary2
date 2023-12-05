import { redirect } from "next/dist/server/api-utils"
import subabase from "./supabaseConnect"

export const signUp = async(userName, userPassword) => {
    const {data, error} = await subabase.auth.signUp({
        email: userName,
        password: userPassword,
        options: {
            emailRedirectTo: "http://localhost:3000/pages/login"
        }
    })

    if(error){
        console.log("signUp fail because ", error.message)
    }
}

export const login = async(userName, userPassword) => {
    const {data, error} = await subabase.auth.signInWithPassword({
        email: userName,
        password: userPassword,
    })

    if(error){
        console.log("login fail because ", error.message)
        return false
    } else{
        return true
    }
}

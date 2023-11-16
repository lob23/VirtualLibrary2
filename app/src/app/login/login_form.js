"use client"; // This is a client component 👈🏽

import {useState} from "react"


export default function login_form(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [notification, setNotification] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("username: ", username);
        console.log("password: ", password);

        const res = await fetch ("api/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        });
        const {msg} = await res.json();
        console.log("message", msg);
        setNotification("abc");
    }

    return (
        <>
        
        <div class=" w-screen h-screen bg-registerbg bg-fixed" >
           
        
            
        </div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} id="username" placeholder="username"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} id="password" placeholder="password"/>
                <button className="bg-green-700 p-3 text-white font-bold" type="submit">login</button>
                <p>abc</p>
            </form> */}
        </>
    );
}
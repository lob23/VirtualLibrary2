"use client";
import React, { useEffect, useState } from 'react';
import { fetchProfile } from "../api/profile/route";
import { useSearchParams, useRouter } from "next/navigation";

export default function _icon() {

    const searchParams = useSearchParams()
    const router = useRouter();
    
    const uid = searchParams.get('uid');

    const [user, setUser] = useState()

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const profileData = await fetchProfile(uid); 
                setUser(profileData);
                console.log("Profile: ", user); 
            } catch (error) {
                console.error("Error fetching profile data: ", error);
            }
        };
        fetchDataFromApi();
        
    }, []);
    
    const handleClick = () => {
        console.log("Click me");
        if( user.User_authenticationLevel == 1 ) router.push("/pages/homeReader?uid=" + uid );
        if( user.User_authenticationLevel == 2 ) router.push("/pages/homeAuthor?uid=" + uid );        
    }

    return (
        <>
        <div className="absolute w-full h-full">
            <img className="object-contain w-full h-full" onClick={handleClick} src="/image/logo.png">
            </img>
        </div>
        </>
    );
};
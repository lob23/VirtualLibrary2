"use client";
import React, { useEffect, useState } from 'react';
import { fetchProfile } from "../_api/profile/route";
import { useSearchParams, useRouter } from "next/navigation";
import { getRole } from '../_api/login/route';

export default function _icon() {

    const searchParams = useSearchParams()
    const router = useRouter();
    
    const uid = searchParams.get('uid');

    const [role, setRole] = useState()

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const _role = await getRole(); 
                setRole(_role);
            } catch (error) {
                console.error("Error fetching profile data: ", error);
            }
        };
        fetchDataFromApi();
        
    }, []);
    
    const handleClick = () => {
        console.log("Click me");
        if( _role.User_authorizationLevel == 1 ) router.push("/homeReader");
        if( _role.User_authorizationLevel == 2 ) router.push("/homeAuthor");        
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
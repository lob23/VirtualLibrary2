"use client"

import "quill/dist/quill.snow.css";
import _IndexPage from "@/app/composer/rich_textEditor"
import { Suspense } from "react";

export default function Home_land(){
    
    return (
        <>   
        <Suspense>   
            <_IndexPage/>
        </Suspense>  
        </>

    );
}
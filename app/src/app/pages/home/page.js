import React from "react"; 
import _headerReader from "@/app/pages/home/header_reader" 
import _headerAuthor from "@/app/pages/home/header_author"
import _homeReader from "@/app/pages/home/reader_home"

export default function homePage(){
    return(
        <div className="absolute w-screen h-full overflow-y-auto no-scrollbar">
            <div className="relative w-full h-auto">
                 <_homeReader/>
            </div>
        </div>
    );
}
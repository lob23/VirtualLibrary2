import React from "react"; 
import _headerReader from "@/app/pages/home/header_reader" 
import _headerAuthor from "@/app/pages/home/header_author"
import _homeReader from "@/app/pages/home/reader_home"
import _footer from "@/app/pages/wrapper/footer"

export default function homePage(){
    return(
        <div className="relative w-full h-full overflow-y-auto no-scrollbar overflow-hidden">
            <div className="relative w-full h-auto z-30">
                <_headerReader/>
            </div>
            <div className="relative w-full h-auto overflow-hidden z-0">
                <_homeReader/>
            </div>
        </div>

        
    );
}
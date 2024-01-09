import React from "react"; 
import _headerReader from "@/app/pages/homeReader/header_reader" 
import _headerAuthor from "@/app/pages/homeAuthor/header_author"
import _homeReader from "@/app/pages/homeReader/reader_homepage"
import _homeAuthor from "@/app/pages/homeAuthor/author_homepage"
import _footer from "@/app/pages/wrapper/footer"
import _dropdown from "@/app/pages/wrapper/Dropdown"

export default function homePage(){
    return(
        // <div className="relative w-full h-full overflow-y-auto no-scrollbar overflow-hidden">
        //     <div className="relative w-full h-auto z-30">
        //         <_headerReader/>
        //     </div>
        //     <div className="relative w-full h-full overflow-hidden z-10">
        //         <_homeReader/>
        //     </div>
        //     <div className="relative w-full h-auto overflow-hidden z-0 mt-5">
        //         <_footer/>
        //     </div>
        // </div>

        <div className="relative w-full h-full overflow-y-auto no-scrollbar overflow-hidden">
            <div className="relative w-full h-auto z-30">
                <_headerAuthor/>
            </div>
            <div className="relative w-full h-full overflow-hidden z-10">
                <_homeAuthor/>
            </div>
            <div className="relative w-full h-auto overflow-hidden z-0 mt-5">
                <_footer/>
            </div>
        </div>

    );
}
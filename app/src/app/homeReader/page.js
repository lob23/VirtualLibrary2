import React, { Suspense } from "react"; 
import _headerReader from "@/app/homeReader/header_reader" 
import _headerAuthor from "@/app/homeAuthor/header_author"
import _homeReader from "@/app/homeReader/reader_homepage"
import _homeAuthor from "@/app/homeAuthor/author_homepage"
import _footer from "@/app/wrapper/footer"
import _dropdown from "@/app/wrapper/Dropdown"

export default function homePage(){
    return(
        <>
        <Suspense>
            <div className="relative w-full h-full overflow-y-auto no-scrollbar overflow-hidden">
                <div className="relative w-full h-auto z-30">
                    <_headerReader/>
                </div>
                <div className="relative w-full h-full overflow-hidden z-10">
                    <_homeReader/>
                </div>
                <div className="relative w-full h-auto overflow-hidden z-0 mt-5">
                    <_footer/>
                </div>
            </div>
        </Suspense>
        </>

        // <div className="relative w-full h-full overflow-y-auto no-scrollbar overflow-hidden">
        //     <div className="relative w-full h-auto z-30">
        //         <_headerAuthor/>
        //     </div>
        //     <div className="relative w-full h-full overflow-hidden z-10">
        //         <_homeAuthor/>
        //     </div>
        //     <div className="relative w-full h-auto overflow-hidden z-0 mt-5">
        //         <_footer/>
        //     </div>
        // </div>

    );
}
import React from "react"; 
import _headerReader from "@/app/pages/home/header_reader" 
import _headerAuthor from "@/app/pages/home/header_author"
import _homeReader from "@/app/pages/home/reader_home"
import _footer from "@/app/pages/wrapper/footer"

export default function homePage(){
    return(
        // <div className="absolute w-screen h-full overflow-y-auto no-scrollbar">
        //     <div className="relative w-full h-auto">
        //          <_homeReader/>
        //     </div>
        // </div>

        // <div className='relative w-screen h-full z-0 overflow-hidden'>
        //     {/* <div className='relative w-screen h-auto z-20'>
        //         <_headerReader />
        //     </div> */}
        //     <div className='relative w-screen h-auto z-10 overflow-hidden'>
        //         <_homeReader />
        //     </div>
        //     {/* <div className='relative w-screen h-auto z-5 overflow-x-hidden'>
        //         <_footer />
        //     </div> */}
            
        // </div>

        <div className="relative w-full h-full overflow-y-auto no-scrollbar">
            <div className="relative w-full h-auto overflow-hidden">
                <_headerReader/>
            </div>
            <div className="relative w-full h-auto overflow-hidden">
                <_homeReader/>
            </div>
        </div>

        
    );
}
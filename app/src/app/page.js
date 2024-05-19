import React, { Suspense } from "react"; 
import _homeLand from "@/app/landing/landing_page"
import _header from "@/app/landing/header_landing"
import _footer from "@/app/wrapper/footer"

export default function landing(){
    return (
        <>
        <Suspense>
            <div className="absolute w-full h-full overflow-y-auto no-scrollbar overflow-hidden">
                <div className="relative w-full h-auto z-30">
                    <_header/>
                </div>
                <div className="relative w-full h-full overflow-hidden z-10">
                    <_homeLand/>
                </div>
                <div className="relative w-full h-auto overflow-hidden z-0 mt-5">
                    <_footer/>
                </div>
            </div>
        </Suspense>
        </>
        
    );
}
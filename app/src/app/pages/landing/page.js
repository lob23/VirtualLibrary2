import React from "react"; 
import _homeLand from "@/app/pages/landing/landing_page"
import _header from "@/app/pages/wrapper/header"
import _footer from "@/app/pages/wrapper/footer"

export default function home_land(){
    return (
        <div className="absolute w-screen h-full overflow-y-auto no-scrollbar">
            <div className="relative w-full h-full">
                <_homeLand/>
            </div>
            <div className="relative w-full h-auto">
                 <_footer/>
            </div>
        </div>
        
        // <div>
        //     <_homeLand/>
        //     {/* <_footer/> */}
        // </div>
    );
}

// export default function author_home(){
//     return(
//         <div>
//             <_header/>
//             <_author_home/>
//         </div>
//     );
// }
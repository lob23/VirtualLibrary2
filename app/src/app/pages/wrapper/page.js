import React from "react"; 
import _footer from "@/app/pages/wrapper/footer"
import _reaingComp from "@/app/pages/wrapper/readingComp";
import _updateComp from "@/app/pages/wrapper/updateComp";
import Carousel from "@/app/pages/wrapper/Carousel";
import _authorStoryComp from "@/app/pages/wrapper/authorStoryComp";

// const slides=[
//     // "https://i.ibb.co/ncrXc2V/1.png",
//     // "https://i.ibb.co/B3s7v4h/2.png",
//     // "https://i.ibb.co/XXR8kzF/3.png",
//     // "https://i.ibb.co/yg7BSdM/4.png",
//     <_authorStoryComp/>,
//     <_authorStoryComp/>,
//     <_authorStoryComp/>,
// ]

export default function footer(){
    return (
        <div>
            {/* <_footer/> */}
            {/* <_reaingComp/> */}
            {/* <_updateComp/> */}
            <_authorStoryComp/>
        </div>
        
    
    //    <div className="relative-w-full h-full">
    //     <Carousel autoSlide = {true} autoSlideInterval={10000}>
    //             {slides.map((s)=>(
    //                 // <img src={s} />
    //                 <div className="relative w-full h-full">
    //                     {s}
    //                 </div>
    //             ))}
    //     </Carousel>
    //    </div>



    );
}
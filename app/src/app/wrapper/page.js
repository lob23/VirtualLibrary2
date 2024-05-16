import React from "react"; 
import _footer from "@/app/wrapper/footer"
import _reaingComp from "@/app/wrapper/readingComp";
import _updateComp from "@/app/wrapper/updateComp";
import Carousel from "@/app/wrapper/Carousel";
import _authorStoryComp from "@/app/wrapper/authorStoryComp";
import _storyComp from "@/app/wrapper/storyComp";
import _dropdown from "@/app/wrapper/Dropdown";
import _createOption from "@/app/wrapper/createOption";

// const slides=[
//     // "https://i.ibb.co/ncrXc2V/1.png",
//     // "https://i.ibb.co/B3s7v4h/2.png",
//     // "https://i.ibb.co/XXR8kzF/3.png",
//     // "https://i.ibb.co/yg7BSdM/4.png",
//     <_authorStoryComp/>,
//     <_authorStoryComp/>,
//     <_authorStoryComp/>,
// ]

export default function wrapper(){
    return (
        <div>
            <_footer/>
            {/* <_reaingComp/> */}
            {/* <_updateComp/> */}
            {/* <_authorStoryComp/> */}
            {/* <_storyComp/> */}
            {/* <div className="relative w-screen h-screen bg-blue">
                <_dropdown/>
                <_createOption/>
            </div> */}
            {/* <_header/> */}
            
           
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
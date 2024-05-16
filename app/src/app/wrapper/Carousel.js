"use client";

import { useEffect, useState } from "react";

export default function Carousel({
    children: slides,
    autoSlide = false, 
    autoSlideInterval = 5000,}){
    const [curr, setCurr] = useState(0)
    console.log("CUR: ", curr)
    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr ===  slides.length - 1 ? 0 : curr + 1))
    
    useEffect(()=>{
        if(!autoSlide)  return 
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return(
        <>
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500"
                  style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="bg-transparent border-none hover:opacity-50">
                    <svg width="21" height="82" viewBox="0 0 21 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0616 0.548501C19.5288 0.165834 18.85 0.398494 18.5456 1.06816L0.767975 40.1714C0.572781 40.6007 0.572781 41.1278 0.767975 41.5571L18.5456 80.6604C18.85 81.33 19.5288 81.5627 20.0616 81.18C20.5943 80.7973 20.7794 79.9443 20.475 79.2746L3.01239 40.8643L20.475 2.45392C20.7794 1.78425 20.5943 0.931168 20.0616 0.548501Z" fill="#27219A"/>
                    </svg>

                </button>
                <button onClick={next} className="bg-transparent border-none hover:opacity-50">
                    <svg width="21" height="82" viewBox="0 0 21 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.18296 0.548501C1.71575 0.165834 2.39447 0.398494 2.69892 1.06816L20.4765 40.1714C20.6717 40.6007 20.6717 41.1278 20.4765 41.5571L2.69892 80.6604C2.39447 81.33 1.71575 81.5627 1.18296 81.18C0.650163 80.7973 0.465057 79.9443 0.76951 79.2746L18.2321 40.8643L0.76951 2.45392C0.465057 1.78425 0.650163 0.931168 1.18296 0.548501Z" fill="#27219A"/>
                    </svg>

                </button>
            </div> 

            <div className="absolute bottom-2 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-blue rounded-full ${curr === i ? "p-1" : "bg-opacity-50"}`}/>
                    ))}
                </div>
            </div>
        </div>
        
        </>
    );
}
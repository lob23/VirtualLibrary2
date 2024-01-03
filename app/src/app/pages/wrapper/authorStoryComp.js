"use client";
export default function authorStoryComp(){
    return(
        <>
        <div className="relative w-screen h-screen">
            <div className="grid grid-flow-col grid-cols-5 grid-rows-none absolute top-0 left-0 right-0 bottom-0  w-2/3 h-3/4 m-auto rounded-3xl bg-white shadow-2xl">
                <img className="col-span-3 w-full h-full object-cover"
                    src="/image/cinder_sample.png">
                </img>
                <div className="col-span-2 w-full h-full flex flex-col text-left px-5">
                    <h2 className="font-Gilroy_sb text-2xl text-blue w-3/4">
                        A New Lunar Chronicles Short Story – COVID-128
                    </h2>
                    <p className="font-Glroy_sb text-md text-yellow w-auto">
                        Published on May 27, 2020
                    </p>
                    <p className="font-Glroy_sb text-sm text-black w-auto">
                    Surprise! I wrote a new Lunar Chronicles short story, inspired by the prompt from @fiercereads asking what our characters would be doing during a time of social distancing. It was really fun for me to hang out with these characters again for a little while, and I hope you’ll enjoy it!
                    “Stay safe, and take care,” said Kai. They both smiled at the netscreen for a beat, then Kai reached forward and ended the transmission.
                    They turned to each other and shared a mutual sigh.
                    “Another day, another press conference,” said Cinder, taking his hand. “You were great, as usual.”
                    Find the rest of the story on the Fierce Reads blog.
                    </p>
                </div>
            </div>
        </div>
        
        </>
    ); 
}
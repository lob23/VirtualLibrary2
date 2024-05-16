"use client";
export default function authorStoryComp(){
    return(
        <>
        <div className="relative w-screen h-[600px]">
            <div className="grid grid-flow-col grid-cols-5 grid-rows-none absolute top-0 left-0 right-0 bottom-0 w-4/5 h-5/6 m-auto rounded-3xl bg-white shadow-2xl overflow-hidden">
                <img className="col-span-3 w-full h-full object-cover"
                    src="/image/cinder_sample.png">
                </img>
                <div className="col-span-2 relative w-4/5 h-3/4 flex flex-col text-left items-center m-auto">
                    <h2 className="font-Gilroy_sb text-3xl text-blue w-full ">
                        A New Lunar Chronicles Short Story – COVID-128
                    </h2>
                    <p className="font-Glroy_sb text-sm text-yellow w-full mt-3">
                        Published on May 27, 2020
                    </p>
                    <p className="font-Glroy_sb text-sm text-black w-full mt-5 leading-tight">
                        Surprise! I wrote a new Lunar Chronicles short story, inspired by the prompt from @fiercereads asking what our characters would be doing during a time of social distancing. It was really fun for me to hang out with these characters again for a little while, and I hope you’ll enjoy it!
                        “Stay safe, and take care,” said Kai. They both smiled at the netscreen for a beat, then Kai reached forward and ended the transmission.
                        They turned to each other and shared a mutual sigh.
                    </p>
                </div>
            </div>
        </div>
        
        </>
    ); 
}
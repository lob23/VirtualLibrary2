"use client";
export default function footer(){
    return(
        <>
            <div className="relative w-full h-[400px] px-5 bg-blue bg-fixed">\
                <div className="grid grid-cols-3 w-full h-full">
                    <div className="flex flex-col static w-[250px] h-auto px-5 py-12">
                        <img 
                            className="absolute w-[60px] h-[60px]"
                            src = "/image/logo_white.png"
                            alt="Logo_footer">
                        </img>
                        <h1 className="font-Gilroy_sb text-white text-5xl text-sp ml-[70px] py-[16px]">
                            Literia
                        </h1>
                        <p className="font-Gilroy_md w-auto h-[100px] text-white text-1xl test-sp leading-5 py-[40px]">
                            Explore a universe of literature and knowledge in the palm of your hand with our library app – where stories and information await, ready to inspire and educate.
                        </p>
                    </div>

                    <div className="flex flex-col static w-[250px] h-[400px] px-5 py-[73px]"> 
                        <h1 className="font-Gilroy_sb text-white text-4xl w-full h-[40px]">
                            About 
                        </h1>
                        <div className="col-span-3 flex gap-y-3 flex-col w-auto h-[200px] py-[40px]">
                            <h2 className="font-Gilroy_md text-white text-2xl">
                                Careers
                            </h2>
                            <h2 className="font-Gilroy_md text-white text-2xl">
                                Privacy
                            </h2>
                            <h2 className="font-Gilroy_md text-white text-2xl">
                                Help
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-col static w-[250px] h-auto px-5 py-[73px]">
                        <h1 className="font-Gilroy_sb text-white text-4xl w-full h-[40px]">
                            Contact us
                        </h1>
                        <div className="grid grid-cols-3 w-full h-[50px] place-items-start ">
                            <button 
                                className="object-cover w-auto h-auto bg-transparent border-none">
                                    <svg width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_57_248)">
                                    <path d="M24.5356 0.194824C11.2809 0.194824 0.535645 10.9401 0.535645 24.1948C0.535645 35.4499 8.28476 44.8943 18.7382 47.4883V31.5292H13.7894V24.1948H18.7382V21.0345C18.7382 12.8659 22.4352 9.07962 30.455 9.07962C31.9756 9.07962 34.5993 9.37818 35.6726 9.67578V16.3238C35.1062 16.2643 34.1222 16.2345 32.9001 16.2345C28.9651 16.2345 27.4444 17.7254 27.4444 21.6009V24.1948H35.2838L33.9369 31.5292H27.4444V48.0191C39.3283 46.5839 48.5366 36.4655 48.5366 24.1948C48.5356 10.9401 37.7904 0.194824 24.5356 0.194824Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_57_248">
                                    <rect width="48" height="48" fill="white" transform="translate(0.535645 0.194824)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </button>
                            <button 
                                className="object-cover w-auto h-auto bg-transparent border-none">
                                    <svg width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_57_248)">
                                    <path d="M24.5356 0.194824C11.2809 0.194824 0.535645 10.9401 0.535645 24.1948C0.535645 35.4499 8.28476 44.8943 18.7382 47.4883V31.5292H13.7894V24.1948H18.7382V21.0345C18.7382 12.8659 22.4352 9.07962 30.455 9.07962C31.9756 9.07962 34.5993 9.37818 35.6726 9.67578V16.3238C35.1062 16.2643 34.1222 16.2345 32.9001 16.2345C28.9651 16.2345 27.4444 17.7254 27.4444 21.6009V24.1948H35.2838L33.9369 31.5292H27.4444V48.0191C39.3283 46.5839 48.5366 36.4655 48.5366 24.1948C48.5356 10.9401 37.7904 0.194824 24.5356 0.194824Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_57_248">
                                    <rect width="48" height="48" fill="white" transform="translate(0.535645 0.194824)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </button>
                            <button 
                                className="object-cover w-auto h-auto bg-transparent border-none">
                                    <svg width="40" height="40" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_57_248)">
                                    <path d="M24.5356 0.194824C11.2809 0.194824 0.535645 10.9401 0.535645 24.1948C0.535645 35.4499 8.28476 44.8943 18.7382 47.4883V31.5292H13.7894V24.1948H18.7382V21.0345C18.7382 12.8659 22.4352 9.07962 30.455 9.07962C31.9756 9.07962 34.5993 9.37818 35.6726 9.67578V16.3238C35.1062 16.2643 34.1222 16.2345 32.9001 16.2345C28.9651 16.2345 27.4444 17.7254 27.4444 21.6009V24.1948H35.2838L33.9369 31.5292H27.4444V48.0191C39.3283 46.5839 48.5366 36.4655 48.5366 24.1948C48.5356 10.9401 37.7904 0.194824 24.5356 0.194824Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_57_248">
                                    <rect width="48" height="48" fill="white" transform="translate(0.535645 0.194824)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                            </button>

                        </div>
                    </div>

                </div>
                

                
            </div>
        </>
    );
}
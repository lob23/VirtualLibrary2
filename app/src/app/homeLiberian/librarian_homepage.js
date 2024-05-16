"use client"; 
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Librarian_homepage(){

    const searchParams = useSearchParams();
    const router = useRouter(); 

    const uid = searchParams.get('uid');

    const handleAuthorRequestClick = () =>(
        router.push("/librarian/manageRequest?uid=" + uid)
    )
    const handleBookRequest = () => {
        router.push("/librarian/manageBook?uid=" + uid)
    }
    const handleUserManageRequest = () => {
        router.push("/librarian/manageUser?uid=" + uid)
    }
    return(
        <>
        <div className="relative w-screen h-screen bg-registerbg bg-fixed overflow-hidden">
        
        <div className="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
          <img
            className="object-contain w-full h-full  "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute bottom-[20px] left-[120px]  w-[120px] h-[150px]">
          <img
            className="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
          <img
            className="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-none absolute top-0 left-0 right-0 bottom-0  w-2/3 h-3/4 m-auto rounded-[40px] bg-white/70 backdrop-blur-sm overflow-hidden">
          <div className="col-span-1 flex flex-col px-10 py-20 w-auto h-full bg-white">
            <img
              className="object-scale-down w-full h-1/2 "
              src="/image/reg_img1.png"
            ></img>
            <h1 className="font-Gilroy_bd text-blue text-[40px] mt-[10px] leading-10">
              Librarian<br></br> Management
            </h1>
            <h3 className="font-Gilroy_sb text-blue text-[20px] mt-[10px]">
              Manage system
            </h3>
          </div>
          <div className="col-span-2 flex flex-col justify-center items-center w-full gap-y-10">
            <button className="w-1/2 px-4 py-1 button_white text-blue text-2xl cursor-pointer"
                    onClick={handleAuthorRequestClick}>
                Verify author request
            </button>
            <button className="w-1/2 px-4 py-1 button_white text-blue text-2xl cursor-pointer"
                    onClick={handleBookRequest}>
                Verify book request
            </button>
            <button className="w-1/2 px-4 py-1 button_white text-blue text-2xl cursor-pointer"
                    onClick={handleUserManageRequest}>
                User management
            </button>
          </div>
        </div>
      </div>
        </>
    );
}
"use client";
import React , { useState } from "react";
import _dropDown from "@/app/pages/wrapper/Dropdown"
import _createOption from "@/app/pages/wrapper/createOption"
import { useSearchParams, useRouter } from "next/navigation";
import landing from "./page";

const header_landing = () => {
  const [notiClick, setNotiClick] = useState(false);
  const [createClick, setCreateClick] = useState(false);
  
  const router = useRouter(); 
  const searchParams = useSearchParams();

  const uid = searchParams.get('uid');

  const handleNotiClick = () => { 
    setNotiClick(!notiClick);
  }
  const handleCreateClick = () => {
    setCreateClick(!createClick);
  }
  const handleLibraryClick = () =>{
    router.push("/pages/search?uid=" + uid);    
  }

  const handleSignInClick = () => {
    router.push("/pages/login");
  }

  const handleSignUpClick = () => {
    router.push("/pages/signup");
  }

    return(
    <>
      <div className="row-span-3 flex flex-row relative w-screen h-[70px] px-10 place-items-center shadow-md bg-transparent">
        <div className="absolute w-[50px] h-[50px]">
          <img
            className="object-contain w-full h-full"
            src="/image/logo.png">
          </img>
        </div>
        <div className="grid grid-cols-3 gap-[60px] relative w-auto h-full ml-[100px] items-center  cursor-pointer">
          <p className="font-Gilroy_sb text-grey text-lg">
            Home
          </p>
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-lg hover:text-grey"
             onClick={handleLibraryClick}
             title="Search page">
            Library
          </p>
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-lg hover:text-grey"
             onClick={handleCreateClick}>
            Create
          </p>
          {/* {createClick &&(
              <div className="absolute w-fit h-fit top-[50px] left-[250px]">
                <_createOption/>
              </div>
          )} */}
        </div>
      
        <div className="grid grid-flow-col grid-cols-2 absolute right-2 gap-[20px] w-[250px] h-full mr-[150px] items-center justify-center cursor-pointer">
            <p className="font-Gilroy_sb text-blue text-lg hover:text-grey hover:opacity-40"
               onClick={handleSignInClick}>
                Sign In
            </p>
            <button className="w-[130px] px-4 py-1 button_yellow text-blue text-lg"
                    onClick={handleSignUpClick}>
                Sign Up
          </button>
        </div>
      </div>
    </>
    );
}

export default header_landing;
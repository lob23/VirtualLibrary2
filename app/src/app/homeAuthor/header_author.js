"use client";
import React , { useState } from "react";
import _dropDown from "@/app/wrapper/Dropdown"
import _createOption from "@/app/wrapper/createOption"
import {  useRouter } from "next/navigation";
import ProfileMenu from "../profile_menu";
import { logout } from "../_api/logout";

const Header_author = () => {
  const [notiClick, setNotiClick] = useState(false);
  const [createClick, setCreateClick] = useState(false);
  
  const router = useRouter(); 
  const handleNotiClick = () => { 
    setNotiClick(!notiClick);
  }
  const handleCreateClick = () => {
    setCreateClick(!createClick);
  }
  const handleLibraryClick = () =>{
    router.push("/search");    
  }

  const handleProfile = () => {
    console.log("Profile Clicked");
    router.push("/profile");
  }

    return(
    <>
      <div className="flex justify-between items-center h-[70px] px-10 shadow-md bg-transparent relative">
        <div className="inline-grid grid-cols-4 gap-[60px] relative w-auto h-full items-center  cursor-pointer">
        <div className=" w-[50px] h-[50px]">
          <img
            className="object-contain w-full h-full"
            src="/image/logo.png">
          </img>
        </div>
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
          {createClick &&(
              <div className="absolute w-fit h-fit top-[50px] left-[250px]">
                {_createOption()}
              </div>
          )}
        </div>
      
        {/* <div className="grid grid-flow-col grid-cols-2 absolute right-2 gap-[40px] w-[100px] h-full mr-[150px] items-center cursor-pointer"
             >
            <div className="relative col-span-1 w-[25px] h-[25px] hover:opacity-50"
                  onClick={handleNotiClick}
                  title="Notification">
                <svg width="25" height="25" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.3456 24.3071V24.3071C15.0012 24.3071 12.2896 21.5955 12.2896 18.251V15.223C12.2896 11.8785 15.0012 9.16687 18.3456 9.16687C21.6901 9.16687 24.4017 11.8785 24.4017 15.223V18.251C24.4017 21.5955 21.6901 24.3071 18.3456 24.3071V24.3071Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M27.5392 32.0504C25.8722 30.0912 23.3907 28.8497 20.6171 28.8497H16.075C13.2786 28.8497 10.7774 30.1124 9.11047 32.1003" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.69153 18.251C1.69153 9.05331 9.14809 1.59674 18.3458 1.59674C27.5435 1.59674 35 9.05331 35 18.251C35 27.4487 27.5435 34.9053 18.3458 34.9053C9.14809 34.9053 1.69153 27.4487 1.69153 18.251V18.251Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            {notiClick &&(
              <div className="absolute w-fit h-fit top-[100px] right-[100px]">
                <_dropDown/>
              </div>
            )}
        </div> */}
        <ProfileMenu handleProfile={handleProfile}/>
      </div>
    </>
    );
}

export default Header_author;
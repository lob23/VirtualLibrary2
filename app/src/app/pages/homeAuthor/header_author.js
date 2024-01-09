"use client";
import React , { useState } from "react";
import _dropDown from "@/app/pages/wrapper/Dropdown"
import _createOption from "@/app/pages/wrapper/createOption"
import { useSearchParams, useRouter } from "next/navigation";

const header_author = () => {
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

    return(
    <>
      <div className="row-span-3 flex flex-row relative w-screen h-[80px] pl-10 py-2 place-items-center shadow-md bg-transparent">
        <div className="absolute w-[60px] h-[60px]">
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
          {createClick &&(
              <div className="absolute w-fit h-fit top-[50px] left-[250px]">
                <_createOption/>
              </div>
          )}
        </div>
      
        <div className="grid grid-flow-col grid-cols-2 absolute right-2 gap-[40px] w-[100px] h-[100px] mr-[100px] items-center cursor-pointer"
             onClick={handleNotiClick}
             title="Notification">
            <div className={`relative col-span-1 w-[30px] h-[30px] hover:opacity-50 ${notiClick ? "opacity-50" : "opacity-100"}`} >
              <svg width="30" height="30" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3754 33.2048V33.3688C13.3754 36.1563 15.507 38.2879 18.2945 38.2879C21.082 38.2879 23.2136 36.1563 23.2136 33.3688V33.2048" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M29.7724 18.6115V13.6923C29.7724 7.2975 24.6893 2.21442 18.2945 2.21442C11.8997 2.21442 6.81657 7.2975 6.81657 13.6923V18.6115C6.81657 24.0225 1.89746 25.3342 1.89746 28.4497C1.89746 31.2372 8.2923 33.3688 18.2945 33.3688C28.2967 33.3688 34.6915 31.2372 34.6915 28.4497C34.6915 25.3342 29.7724 24.0225 29.7724 18.6115V18.6115Z" stroke="#444444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            {notiClick &&(
              <div className="absolute w-fit h-fit top-[100px] right-[100px]">
                <_dropDown/>
              </div>
            )}

            <div className="relative col-span-1 w-[30px] h-[30px] hover:opacity-50"
                 title="Profile">
                <svg width="30" height="30" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3456 24.3071V24.3071C15.0012 24.3071 12.2896 21.5955 12.2896 18.251V15.223C12.2896 11.8785 15.0012 9.16687 18.3456 9.16687C21.6901 9.16687 24.4017 11.8785 24.4017 15.223V18.251C24.4017 21.5955 21.6901 24.3071 18.3456 24.3071V24.3071Z" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M27.5392 32.0504C25.8722 30.0912 23.3907 28.8497 20.6171 28.8497H16.075C13.2786 28.8497 10.7774 30.1124 9.11047 32.1003" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.69153 18.251C1.69153 9.05331 9.14809 1.59674 18.3458 1.59674C27.5435 1.59674 35 9.05331 35 18.251C35 27.4487 27.5435 34.9053 18.3458 34.9053C9.14809 34.9053 1.69153 27.4487 1.69153 18.251V18.251Z" stroke="#444444" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
      </div>
    </>
    );
}

export default header_author;
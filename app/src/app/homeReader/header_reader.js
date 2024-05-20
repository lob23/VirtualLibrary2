"use client";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import ProfileMenu from "../profile_menu";

export default function Header_reader(){
  const [notiClick, setNotiClick] = useState(false);
  const [createClick, setCreateClick] = useState(false);
  
  const router = useRouter(); 

  const handleNotiClick = () => { 
    setNotiClick(!notiClick);
  }
  const handleCreatorClick = () => {
    router.push("/request");
  }
  const handleLibraryClick = () =>{
    router.push("/search");    
  }

  const handleProfileClick = () => {
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
             onClick={handleCreatorClick}>
            Creator
          </p>
        </div>
        <ProfileMenu handleProfile={handleProfileClick}/>
      </div>
    </>
    );
}
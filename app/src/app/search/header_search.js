
import {useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { fetchAuthorById } from "../api/search/route";

export default function Header(){
    const router = useRouter();
    const searchParams = useSearchParams();
    const [user, setUser] = useState(null)

    const uid = searchParams.get("uid")

    useEffect(() => {
      const fetchUser = async () => {
        const usr = await fetchAuthorById(uid);
        setUser(usr);
      }
      fetchUser();
    })

    const backToHome = () => {
      console.log("user", user)
      if (user.User_authorizationLevel == 1)
        router.push("/homeReader?uid=" + user._id);
      else (user.User_authorizationLevel == 2)
        router.push("/homeAuthor?uid=" + user._id);
    }

    return(
    <>
      <div className="row-span-3 flex flex-row relative w-screen h-[80px] pl-10 py-2 items-center bg-transparent cursor-pointer">
        <div className="absolute w-[50px] h-[50px]">
          <img
            className="object-contain w-full h-full"
            src="/image/logo.png"
            onClick={()=>backToHome()}>
          </img>
        </div>
        <div className="grid grid-cols-3 gap-[60px] relative w-auto h-[100px] ml-[140px] pt-[42px] items-center">
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-lg hover:text-grey"
             title="Home page" onClick={() => {backToHome()}}>
            Home
          </p>
          <p className="font-Gilroy_sb text-grey text-lg hover:text-grey"
             title="Search page">
            Library
          </p>
        </div>
       
        <div className="grid grid-flow-col grid-cols-2 absolute right-2 gap-[40px] w-[100px] h-[100px] mr-[50px] pt-[40px] items-center">

            <div className="relative col-span-1 w-[25px] h-[25px] hover:opacity-50">
                <svg width="25" height="25" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
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
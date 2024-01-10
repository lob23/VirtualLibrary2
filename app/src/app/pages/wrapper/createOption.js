"use client";
import { useRouter } from "next/navigation";
export default function createOption(uid){
    const router = useRouter(); 
    const handleOptionComposeClick = () => {
        router.push("/pages/booksetting?uid=" + uid);
    }
    const handleYourListClick = () => {
        router.push("/pages/authorbookmanagement?uid=" + uid); 
    }
    return(
        <>
        <div className="relative w-[200px] h-[150px] bg-white rounded-2xl justify-center drop-shadow-md">
            <div className="absolute w-full h-full flex flex-col">
            <div className="w-ful h-1/2 border-b-2 flex flex-wrap items-center border-solid border-black border-opacity-30 border-t-0 border-x-0" >
               <h2 className="font-Gilroy_md text-xl text-blue pl-3 opacity-30 hover:opacity-80"
                   onClick={handleOptionComposeClick}>
                    Start composing
               </h2>
            </div>
            <div className="w-full h-1/2 flex flex-wrap items-center">
                <h2 className="font-Gilroy_md text-xl text-blue pl-3 opacity-30 hover:opacity-80"
                    onClick={handleYourListClick}>
                    Your list 
                </h2>
            </div>
            </div>
            
        </div>
        </>
    ); 
}
"use client";
export default function reader_home(){
  return(
    <>
      <div className="row-span-3 flex flex-row relative w-screen h-[80px] ml-10 mr-5 py-4 items-center">
        <div className="absolute w-[60px] h-[60px]">
          <img
            className="object-contain w-full h-full"
            src="/image/logo.png">
          </img>
        </div>
        <div className="grid grid-cols-3 gap-[60px] relative w-auto h-[100px] ml-[160px] pt-[45px] items-center">
          <p className="font-Gilroy_sb text-grey text-xl hover:opacity-60">
            Home
          </p>
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-xl hover:text-grey">
            Library
          </p>
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-xl hover:text-grey">
            Creator
          </p>
        </div>
       
        <div className="row-span-2 flex flex-row gap-[60px] absolute right-2 w-auto h-[100px] mr-[100px] pt-[45px] items-center">
          <p className="font-Gilroy_sb text-blue text-xl hover:text-[#434373] hover:opacity-60 ">
            Sign In
          </p>
          <button className="w-auto px-6 py-3 button_yellow text-blue">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
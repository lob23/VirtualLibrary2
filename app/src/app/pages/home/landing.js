"use client";
export default function landing(){
  return(
    <>
    <div className="relative w-screen h-full">
      <div className="row-span-3 flex flex-row relative w-screen h-[80px] px-10 py-4 items-center shadow">
        <div className="absolute w-[60px] h-[60px]">
          <img
            className="object-contain w-full h-full"
            src="/image/logo.png">
          </img>
        </div>
        <div className="grid grid-cols-3 gap-[60px] relative w-auto h-[100px] ml-[160px] pt-[45px] items-center">
          <p className="font-Gilroy_sb text-grey text-xl">
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
      
      <div className="relative w-screen h-full overflow-y-auto">
        <div className="grid grid-flow-col grid-cols-2 relative w-screen h-full">
          <div className="relative col-span-1 flex flex-col flex-col-3 w-full h-full pl-20 top-1/3">
            <h1 className="font-Gilroy_md text-blue text-5xl w-full">
              Welcome to <br/>   Literia
            </h1>
            <p className="font-Gilroy_sb text-blue text-md mt-3">
            The world's most-loved social <br/>storytelling platform
            </p>
            <button className="w-1/4 mt-5 px-6 py-3 button_white text-blue">
              Join In
            </button>
          </div>

          <div className="relative col-span-1 w-auto h-full">
            <img
              className="object-scale-down w-full h-full"
              src="/image/try.png">
            </img>
          </div>
        </div>
        <div class="absolute w-screen h-[2000px] bg-blue"></div>
      </div>
      
    </div>
    </>
  );
}
// export default function home_land(){
//     return(
//         <>
//             <div class="flex flex-wrap flex-row relative w-screen justify-between">
            
//                 <div class = "top-5 left-10 w-[60px] h-[60px] pl-10 pt-6">
//                     <img 
//                         class = "object-contain w-full h-full"
//                         src="/image/logo.png">
//                     </img>
//                 </div>
//                 <div class = "flex flex-wrap flex-row items-center ml-[50px] mt-[60px] space-x-20">
//                     <h2 class = "font-Gilroy_sb text-blue text-[16px]">
//                         Home
//                     </h2>
//                     <h2 class = "font-Gilroy_sb text-blue text-[16px]">
//                         Library
//                     </h2>
//                     <h2 class = "font-Gilroy_sb text-blue text-[16px]">
//                         Creator
//                     </h2>
//                 </div>
//                 <div class = "flex flex-row items-end relative w-max h-max ml-auto mt-auto pr-10 space-x-5">
                   
//                         <h2 className="font-Gilroy_sb text-blue text-[16px]">
//                             Sign In
//                             <button className="ml-2 w-auto p-4 self-center bg-yellow rounded-[40px] border-none text-blue text-[16px] font-Gilroy_sb">
//                                 Sign Up
//                             </button>
//                         </h2>

                    
//                 </div>
//             </div>

            
//         </>
        
        
//     );
// }
"use client";// This is a client component 👈🏽

export default function home_land() {
    return (
      <div className="flex items-center justify-between w-full p-5">
        <div className="flex flex-row items-center">
          <div className="w-[60px] h-[60px]">
            <img
              className="object-contain w-full h-full"
              src="/image/logo.png"
              alt="Logo"
            />
          </div>
          <h2 className="font-Gilroy_sb text-blue text-[16px]">
            Home
          </h2>
          <h2 className="font-Gilroy_sb text-blue text-[16px]">
            Library
          </h2>
          <h2 className="font-Gilroy_sb text-blue text-[16px]">
            Creator
          </h2>
        </div>
        <div className="flex items-center w-auto "> 
          <h2 className="font-Gilroy_sb text-blue text-[16px]">
            Sign In
          </h2>
          <button className="w-auto p-4 bg-yellow rounded-[20px] border-none text-blue text-[16px] font-Gilroy_sb">
            Sign Up
          </button>
        </div>
      </div>
    );
  }
  
  
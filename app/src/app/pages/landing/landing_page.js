"use client";
export default function landing(){
  return(
    <>
    <div className="relative w-screen h-full">
      <div className="row-span-3 flex flex-row relative w-screen h-[80px] px-10 place-items-center shadow">
        <div className="absolute w-[60px] h-[60px]">
          <img
            className="object-contain w-full h-full"
            src="/image/logo.png">
          </img>
        </div>
        <div className="grid grid-cols-3 gap-[60px] relative w-auto h-full ml-[100px] items-center">
          <p className="font-Gilroy_sb text-grey text-lg">
            Home
          </p>
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-lg hover:text-grey">
            Library
          </p>
          <p className="font-Gilroy_sb text-grey text-opacity-60 text-lg hover:text-grey">
            Creator
          </p>
        </div>
      
        <div className="row-span-2 flex flex-row gap-[60px] absolute right-2 w-auto h-full mr-[10px] items-center">
          <p className="font-Gilroy_sb text-blue text-lg hover:text-[#434373] hover:opacity-60 ">
            Sign In
          </p>
          <button className="w-auto px-8 py-1 mr-5 button_yellow text-blue text-lg">
            Sign Up
          </button>
        </div>
      </div>
    
      <div className="relative w-full h-full overflow-y-auto no-scrollbar">
        <div className="grid grid-flow-col grid-cols-3 relative w-screen h-screen">
          <div className="relative col-span-1 flex flex-col flex-col-3 w-full h-full pl-20 top-1/4 ml-10">
            <h1 className="font-Gilroy_sb text-blue text-7xl w-full">
              Welcome to <br/>   Literia
            </h1>
            <p className="font-Gilroy_sb text-blue text-md mt-3">
            The world's most-loved social <br/>storytelling platform
            </p>
            <button className="w-1/4 mt-5 px-6 py-1 button_white text-blue">
              Join In
            </button>
          </div>

          <div className="relative col-span-2 w-full h-full right-0">
            <img
              className="object-cover w-full h-full"
              src="/image/logo_landing.png">
            </img>
          </div>
        </div>

        <div className="relative w-screen h-auto">
          <div className="relative w-screen h-auto text-center">
            <h1 className="font-Gilroy_sb text-blue text-4xl">
              See your story
            </h1>
          </div>
        </div>

        <div className="grid grid-flow-col grid-cols-3 relative w-screen h-fit mt-10">
          <div className="col-span-1 flex flex-col-3 relative w-full h-4/5 left-0 right-0 justify-center">
            <div className="row-span-1 relative w-3/4 h-full">
              <img
                className="object-scale-down w-full h-1/2"
                src="/image/create_icon.png">
              </img>
              <h1 className="font-Gilroy_sb text-center w-full mt-3 text-yellow text-2xl">
                Create
              </h1>
              <p className="font-Gilroy_sb text-center w-full mt-5 text-blue text-lg ">
                Unleash your imagination and weave the tales only you can tell. Begin crafting your narrative today and watch as your words come to life.
              </p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col-3 relative w-full h-4/5 left-0 right-0 justify-center">
            <div className="row-span-1 relative w-3/4 h-full">
              <img
                className="object-scale-down w-full h-1/2"
                src="/image/read_icon.png">
              </img>
              <h1 className="font-Gilroy_sb text-center w-full mt-3 text-yellow text-2xl">
                Read
              </h1>
              <p className="font-Gilroy_sb text-center w-full mt-5 text-blue text-lg ">
              Dive into a good book today and let the power of words transport you to places you've never been.
              </p>
            </div>
          </div>

          <div className="col-span-1 flex flex-col-3 relative w-full h-4/5 left-0 right-0 justify-center">
            <div className="row-span-1 relative w-3/4 h-full">
              <img
                className="object-scale-down w-full h-1/2"
                src="/image/translate_icon.png">
              </img>
              <h1 className="font-Gilroy_sb text-center w-full mt-3 text-yellow text-2xl">
                Translate
              </h1>
              <p className="font-Gilroy_sb text-center w-full mt-5 text-blue text-lg ">
              With each translation, you unlock a new layer of meaning and share the universal language of storytelling with the world.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-screen h-5/6 bg-blue">
          <div className="absolute w-full h-full">
            <div className="absolute -bottom-14 -right-2 w-[200px] h-[200px] transform rotate-90">
              <img className="object-center  w-full h-full " 
                    src="/image/reg_cir.png">
              </img>
            </div>  
            <div className="absolute bottom-[210px] right-10 w-[58px] h-[58px] transform -rotate-45">
              <img className="object-center w-full h-full "
                   src="/image/reg_cir.png">
              </img>
            </div>
            <div className="absolute top-6 right-3 w-[100px] h-[100px] transform rotate-45">
              <img className="object-center w-full h-full "
                   src="/image/reg_cir.png">
              </img>
            </div>

            <div className="absolute top-20 left-8 w-[60px] h-[60px] transform rotate-180">
              <img className="object-center w-full h-full "
                   src="/image/reg_cir.png">
              </img>
            </div>
            <div className="absolute bottom-5 -left-[80px] w-[230px] h-[230px] transform -rotate-[120deg]">
              <img className="object-center w-full h-full "
                   src="/image/reg_cir.png">
              </img>
            </div>

            <div className="absolute -bottom-[60px] -left-8 w-[180px] h-[180px] transform -rotate-[120deg]">
              <img className="object-center w-full h-full "
                   src="/image/reg_cir.png">
              </img>
            </div>
          </div>

          <div className="absolute w-2/3 h-3/4 left-0 right-0 top-0 bottom-0 items-center">
            <div className="absolute w-[70px] h-[70px] right-0 left-0">
              <img className="object-center w-full h-full"
                   src="/image/logo_white.png">
              </img>
            </div>
          </div>
        </div>

        <div class="absolute w-screen h-[2000px] bg-yellow"></div>
      </div>
      
    </div>
    </>
  );
}
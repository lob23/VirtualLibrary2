"use client";
export default function profilePage(){
    return(
        <>
        <div className="relative w-screen h-screen flex flex-col justify-center items-center bg-registerbg bg-fixed overflow-hidden">
        <div className="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
          <img
            className="object-contain w-full h-full  "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute bottom-[20px] left-[120px]  w-[120px] h-[150px]">
          <img
            className="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
          <img
            className="object-contain w-full h-full "
            src="/image/reg_cir.png"
          ></img>
        </div>
        <div className="absolute flex flex-wrap top-10 left-10 first-letter:w-[100px] h-[60px] items-center self-start">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue cursor-pointer transform -rotate-90"
                viewBox="0 0 20 20"
                fill="currentColor"
            // onClick={() => handleBackClick()} // Replace 
            >
                <path
                    fillRule="evenodd"
                    d="M8.707 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 1 1-1.414-1.414l6-6z"
                />
            </svg>
            <p className="font-Gilroy_sb text-blue font-[20px]">Back</p>
        </div>
        <div class="w-1/2 mx-auto bg-white p-8 shadow-md rounded-2xl flex flex-col">
            <h1 class="font-Gilroy_sb text-3xl text-blue mb-4">User Profile</h1>
            <div className="w-full h-full flex flex-row">
            <div className="w-1/2 h-full">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">First Name:</label>
                    {/* <p>{{ user.User_firstname }}</p> */}
                    <p class="font-Gilroy_md">Gia Thinh</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">Last Name:</label>
                    {/* <p>{{ user.User_lastname }}</p> */}
                    <p class="font-Gilroy_md">Pham</p>
                </div>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">Date of Birth:</label>
                    {/* <p>{{ user.User_dob ? user.User_dob.toDateString() : 'N/A' }}</p> */}
                    <p class="font-Gilroy_md">12/12/2000</p>
                </div>
            </div>
            
            <div className="w-1/2 h-full">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">Email:</label>
                {/* <p>{{ user.User_email }}</p> */}
                <p class="font-Gilroy_md">pgthinh@gmail.com</p>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">Phone:</label>
                {/* <p>{{ user.User_phone }}</p> */}
                <p class="font-Gilroy_md">0123456789</p>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">Address:</label>
                {/* <p>{{ user.User_address }}</p> */}
                <p class="font-Gilroy_md">123 Nguyen Van Linh, Da Nang</p>
            </div>
            </div>
            </div>
            
            
        </div>
        </div>
        </>
    ); 
}
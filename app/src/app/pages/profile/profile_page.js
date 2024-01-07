"use client";
export default function profilePage(){
    return(
        <>
        <div className="relative w-screen h-screen bg-blue">
            <div class="max-w-md mx-auto bg-white p-8 shadow-md rounded-md">
                <h1 class="text-2xl font-bold mb-4">User Profile</h1>

                <div class="mb-4">
                    <label class="block text-gray-700 text-sm  font-Gilroy_md font-bold mb-2">First Name:</label>
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

                <div class="mb-4">
                    {/* authentication */}
                    <label class="block text-gray-700 text-sm font-Gilroy_md font-bold mb-2">Authentication:</label>
                    {/* <p>{{ user.User_auth }}</p> */}
                    <p class="font-Gilroy_md">1</p>
                </div>
            </div>
        </div>
        </>
    ); 
}
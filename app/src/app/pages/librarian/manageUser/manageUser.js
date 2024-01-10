"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getList } from '@/app/pages/api/librarian/manageUser/route'

export default function manageUser() {

    const searchParams = useSearchParams();
    const route = useRouter();

    const uid = searchParams.get('uid');

    const [UList, setUList] = useState([]);

    useEffect(() => {
        const getUList = async () => {
            try {
                const response = await getList();
                console.log(response);
                setUList(response);
                console.log("UList: ", UList);
            }
            catch (error) {
                console.error("Error fetching request list: ", error);
            }
        }

        getUList()
    }, []);

    return (
        <>
            <div className="relative w-screen h-screen bg-white overflow-hidden flex flex-wrap items-center justify-center">
                <h2 className="absolute font-Gilroy_sb text-3xl text-blue top-6 left-[120px] cursor-pointer hover:opacity-50"
                    onClick={() => {route.back()} }>
                    Manage User
                </h2>
                <div className="flex flex-col w-4/5 h-fit rounded-2xl  overflow-hidden border-b-1 border-blue border-solid border-opacity-60 mx-auto mt-5">
                    <div className="flex flex-row w-full h-[40px] bg-red bg-opacity-50 items-center justify-center ">
                        <div className="w-1/4 text-center">
                            <p className="font-Gilroy_sb text-lg text-blue">
                                User ID
                            </p>
                        </div>
                        <div className="w-1/4 text-center">
                            <p className="font-Gilroy_sb text-lg text-blue">
                                User Name
                            </p>
                        </div>
                        <div className="w-1/4 text-center">
                            <p className="font-Gilroy_sb text-lg text-blue">
                                User Email
                            </p>
                        </div>
                        <div className="w-1/4 text-center">
                            <p className="font-Gilroy_sb text-lg text-blue">
                                User Type
                            </p>
                        </div>
                    </div>

                    {UList && UList.length > 0 ? (
                        UList.map((item) => (
                            item.User_authenticationLevel !== 3 && (
                                <li className=" w-auto h-fit flex flex-row items-center  style-none justify-center text-center " key={item.id}>
                                    <div className="w-1/4 h-auto border-black border-solid border-opacity-50 border-y-0 border-l-0 border-r-1 py-4">
                                        {item._id}
                                    </div>
                                    <div className="w-1/4 h-auto border-black border-solid border-opacity-50 border-y-0 border-l-0 border-r-1 py-4" >
                                        {item.User_firstname} {item.User_lastname}
                                    </div>
                                    <div className="w-1/4 h-auto border-black border-solid border-opacity-50 border-y-0 border-l-0 border-r-1 py-4">
                                        {item.User_email}
                                    </div>
                                    <div className="w-1/4 h-auto py-4">
                                        {item.User_authenticationLevel === 2 ? "Author" : item.User_authenticationLevel === 1 ? "Reader" : ""}
                                    </div>
                                </li>
                            )
                        ))
                    ) : (
                        <div className="relative w-full h-full flex items-center justify-center ">
                            <h2 className="font-Gilroy_sb text-3xl text-blue">
                                You have no users currently
                            </h2>
                        </div>
                    )}
                </div>
            </div >
        </>

    );
}
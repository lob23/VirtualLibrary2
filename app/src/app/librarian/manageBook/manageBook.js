"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getList } from '@/app/api/librarian/manageBook/route'

export default function ManageBook() {

    const searchParams = useSearchParams();
    const router = useRouter();

    const uid = searchParams.get('uid');

    const [BList, setBList] = useState([]);

    useEffect(() => {
        const getBList = async () => {
            try {
                const response = await getList();
                console.log(response);
                setBList(response);
                console.log("BList: ", BList);
            }
            catch (error) {
                console.error("Error fetching book list: ", error);
            }
        }

        getBList()
    }, []);

    const handleClick = (bid) => {
        router.push( "/librarian/librarianBDetail?uid=" + uid + "&bid=" + bid );
    }

    return (
        <>
    <div className="relative w-screen h-screen bg-white overflow-hidden flex flex-wrap items-center justify-center">
        <h2 className="absolute font-Gilroy_sb text-3xl text-blue top-6 left-[120px] cursor-pointer hover:opacity-50"
            onClick={() => {router.push("/homeLiberian?uid=" + uid)}}>
            Waiting List
        </h2>
        <div className="flex flex-col w-4/5 h-fit rounded-2xl  overflow-hidden border-b-1 border-blue border-solid border-opacity-60 mx-auto mt-5">
            <div className="flex flex-row w-full h-[40px] bg-red bg-opacity-50 items-center justify-center ">
                <div className="w-1/2 text-center">
                    <p className="font-Gilroy_sb text-lg text-blue">
                        Book ID
                    </p>
                </div>
                <div className="w-1/2 text-center">
                    <p className="font-Gilroy_sb text-lg text-blue">
                        Book Title
                    </p>
                </div>
            </div>

            {BList && BList.length > 0 ? (
    BList.map((item, index) => (
        <li className={`w-auto h-fit flex flex-row items-center style-none justify-center text-center py-4${index === BList.length - 1 ? '' : ' border-black border-solid border-x-0 border-t-0 border-opacity-30 border-b-1'}`} key={item.id}>
            <div className="w-1/2 h-auto">
                {item._id}
            </div>
            <div className="w-1/2 h-auto text-left hover:text-blue cursor-pointer" 
                 onClick={(e) => {handleClick(item._id)}}>
                {item.BDetail_title}
            </div>
        </li>
    ))
) : (
    <div className="relative w-full h-full flex items-center justify-center ">
        <h2 className="font-Gilroy_sb text-3xl text-blue">
            You have no books waiting
        </h2>
    </div>
)}

        </div>
    </div >
</>

    );
}
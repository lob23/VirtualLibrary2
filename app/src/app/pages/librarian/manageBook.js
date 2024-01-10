"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getList } from '@/app/pages/api/librarian/manageBook/route'

export default function manageBook() {

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
        router.push( "/pages/librarian/librarianBDetail?uid=" + uid + "&bid=" + bid );
    }

    return (
        <>
    <div className="relative w-[800px] h-[400px] bg-white rounded-2xl overflow-y-auto flex flex-col shadow-lg">
        <div className="w-full h-[80px] border-b-2 border-solid border-black border-opacity-30 border-t-0 border-x-0">
            <div className="w-full h-full top-0 bottom-0 flex items-center">
                <h2 className="font-Gilroy_md text-blue text-3xl ml-7">
                    Waiting list
                </h2>
            </div>
        </div>
        <ul className="relative flex flex-col overflow-y-auto no-scrollbar w-full h-auto list-none">
            {BList && BList.length > 0 ? (
                BList.map((item) => (
                    <li className="relative w-full h-full flex items-center justify-between" key={item.id}>
                        <div className="text-black">
                            {item._id}
                        </div>
                        <div className="text-blue" onClick={(e) => {handleClick(item._id)}}>
                            {item.BDetail_title}
                        </div>
                    </li>
                ))
            ) : (
                <li className="relative w-full h-full">You have no waiting book</li>
            )}
        </ul>
    </div>
</>

    );
}
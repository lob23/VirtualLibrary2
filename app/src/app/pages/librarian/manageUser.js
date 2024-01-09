"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getList} from '@/app/pages/api/librarian/manageUser/route'

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
    <div className="relative w-[800px] h-[400px] bg-white rounded-2xl overflow-y-auto flex flex-col shadow-lg">
        <div className="w-full h-[80px] border-b-2 border-solid border-black border-opacity-30 border-t-0 border-x-0">
            <div className="w-full h-full top-0 bottom-0 flex items-center">
                <h2 className="font-Gilroy_md text-blue text-3xl ml-7">
                    Request
                </h2>
            </div>
        </div>
        <ul className="relative flex flex-col overflow-y-auto no-scrollbar w-full h-auto list-none">
            {UList && UList.length > 0 ? (
                UList.map((item) => (
                    <li className="relative w-full h-full flex items-center justify-between" key={item.id}>
                        <div>
                            {item._id}
                        </div>
                        <div>
                            {item.User_firstname} {item.User_lastname}
                        </div>
                        <div>
                            ...Another attribute
                        </div>
                    </li>
                ))
            ) : (
                <li className="relative w-full h-full">You have no user</li>
            )}
        </ul>
    </div>
</>

    );
}
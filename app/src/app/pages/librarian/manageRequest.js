"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getList, acceptRequest, rejectRequest } from '@/app/pages/api/librarian/manageRequest/route'

export default function manageRequest() {

    const searchParams = useSearchParams();
    const route = useRouter();

    const uid = searchParams.get('uid');

    const [RQList, setRQList] = useState([]);

    useEffect(() => {
        const getRQList = async () => {
            try {
                const response = await getList();
                console.log(response);
                setRQList(response);
                console.log("RQList: ", RQList);
            }
            catch (error) {
                console.error("Error fetching request list: ", error);
            }
        }

        getRQList()
    }, []);

    // const handleAccept = (rid) => {
    //     acceptRequest(rid);
    // }

    // const handleReject = (rid) => {
    //     rejectRequest(rid);
    // }

    const handleAccept = async (rid) => {
        try {
            await acceptRequest(rid);
            const updatedList = await getList();
            setRQList(updatedList);
        } catch (error) {
            console.error("Error accepting request: ", error);
        }
    }

    const handleReject = async (rid) => {
        try {
            await rejectRequest(rid);
            setRQList((prevList) => prevList.filter(item => item._id !== rid));
        } catch (error) {
            console.error("Error rejecting request: ", error);
        }
    }

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
            {RQList && RQList.length > 0 ? (
                RQList.map((item) => (
                    <li className="relative w-full h-full flex items-center justify-between" key={item.id}>
                        <div className="text-black">
                            {item.Request_userId}
                        </div>
                        <div className="text-blue">
                            {item.Request_motivation}
                        </div>
                        <div className="flex space-x-2">
                            <button className="bg-green text-white px-3 py-1 rounded-md" onClick={() => handleAccept(item._id)}>
                                Accept
                            </button>
                            <button className="bg-red text-white px-3 py-1 rounded-md" onClick={() => handleReject(item._id)}>
                                Reject
                            </button>
                        </div>
                    </li>
                ))
            ) : (
                <li className="relative w-full h-full">You have no request</li>
            )}
        </ul>
    </div>
</>

    );
}
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getList, acceptRequest, rejectRequest } from '@/app/_api/librarian/manageRequest/route'

export default function ManageRequest() {

    const router = useRouter();
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
    <div className="relative w-screen h-screen bg-white overflow-hidden flex flex-wrap items-center justify-center">
        <h2 className="absolute font-Gilroy_sb text-3xl text-blue top-6 left-[120px] cursor-pointer hover:opacity-50"
            onClick={() => {router.push("/homeLibrarian")}}>
            Manage Request
        </h2>
        <div className="flex flex-col w-4/5 h-fit rounded-2xl  overflow-hidden border-b-1 border-blue border-solid border-opacity-60 mx-auto mt-5">
            <div className="flex flex-row w-full h-[40px] bg-red bg-opacity-50 items-center justify-center ">
                <div className="w-1/3 text-center">
                    <p className="font-Gilroy_sb text-lg text-blue">
                        User ID
                    </p>
                </div>
                <div className="w-1/3 text-center">
                    <p className="font-Gilroy_sb text-lg text-blue">
                        Motivation
                    </p>
                </div>
                <div className="w-1/3 text-center">
                    <p className="font-Gilroy_sb text-lg text-blue">
                        Manage
                    </p>
                </div>
            </div>

            {RQList && RQList.length > 0 ? (
    RQList.map((item, index) => (
        <li className={`w-auto h-fit flex flex-row items-center style-none justify-center text-center py-4${index === RQList.length - 1 ? '' : ' border-black border-solid border-x-0 border-t-0 border-opacity-30 border-b-1'}`} key={item.id}>
            <div className="w-1/3 h-auto">
                {item.Request_userId}
            </div>
            <div className="w-1/3 h-auto" >
                {item.Request_motivation}
            </div>
            <div className="w-1/3 h-auto flex flex-col justify-center items-center gap-y-4">
                <button className="bg-green text-white px-3 py-1 rounded-md w-fit cursor-pointer" onClick={() => handleAccept(item._id)}>
                    Accept
                </button>
                <button className="bg-red text-white px-3 py-1 rounded-md w-fit cursor-pointer" onClick={() => handleReject(item._id)}>
                    Reject
                </button>
            </div>
        </li>
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
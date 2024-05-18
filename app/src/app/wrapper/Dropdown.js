"use client";

import _dropDrownComp from "./dropDownComp.js";
import React, { useEffect, useState } from "react";
import { getNotifyList } from '@/app/_api/wrapper/route.js'
import { useSearchParams } from "next/navigation";

export default function Dropdown() {

    const searchParams = useSearchParams();
    const uid = searchParams.get('uid');

    const [notifyList, setList] = useState();

    useEffect(() => {

        const fetchData = async () => {
            try {
                // Get notification list of the current user
                const response = await getNotifyList(uid);
                setList(response);
                console.log('Notification list: ', notifyList);
            }
            catch (error) {
                console.error('Error: ', error);
            }
        }

        // Fetch data initially
        fetchData();

        // Set up an interval to fetch data every 5 minutes (300,000 milliseconds)
        const intervalId = setInterval(fetchData, 300000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);

    }, [uid]); // Make sure to include uid in the dependency array

    return (
        <>
            <div className="relative w-[400px] h-[400px] bg-white rounded-2xl overflow-y-auto flex flex-col shadow-lg">
                <div className=" w-full h-[80px] border-b-2 border-solid border-black border-opacity-30 border-t-0 border-x-0">
                    <div className=" w-full h-full top-0 bottom-0 flex items-center">
                        <h2 className="font-Gilroy_md text-blue text-3xl ml-7">
                            Notification
                        </h2>
                    </div>
                </div>
                <div className="w-full h-4/5">
                {
                    notifyList && notifyList.length > 0 ?
                    (
                        <ul className="relative flex flex-col overflow-y-auto no-scrollbar w-full h-auto list-none">
                        {
                                notifyList.map((item) => (
                                    <li className="relative w-full h-full" key={item.id}>
                                        {_dropDrownComp(item)}
                                    </li>
                                ))
                            
                        }
                        </ul> 
                    ):(
                        <div className="relative w-full h-full flex items-center justify-center ">
                            <h2 className="font-Gilroy_sb text-xl text-blue">
                            You have no notification
                            </h2>
                        </div>
                    )
                }
                </div>
                
            </div>
        </>
    );
}

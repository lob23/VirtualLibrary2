"use client"

import _dropDrownComp from "./dropDownComp.js";
import React, { useEffect } from "react";
import { useState } from "react";
import { getNotifyList } from '@/app/pages/api/wrapper/route'
import { useSearchParams } from "next/navigation";

export default function Dropdown(){

    const searchParams = useSearchParams();
    const uid = searchParams.get('uid');

    const [notifyList, setList] = useState();

    useEffect( () => {

        const prepare = async () => {
            try {
                // Get notification list of current user
                const response = await getNotifyList(uid);
                setList(response);
                console.log('Notification list: ', notifyList);
            }
            catch (error) {
                console.error('Error: ', error);
            }
        }

        prepare()
    }, []);

    return(
        <>
        <div className="relative w-[400px] h-[400px] bg-white rounded-2xl overflow-y-auto flex flex-col shadow-lg">
            <div className=" w-full h-[110px] border-b-2 border-solid border-black border-opacity-30 border-t-0 border-x-0">
                <div className=" w-full h-full top-0 bottom-0 flex items-center">
                    <h2 className="font-Gilroy_md text-blue text-3xl ml-7">
                        Notification
                    </h2>
                </div>
            </div>
            <ul className="relative flex flex-col overflow-y-auto no-scrollbar w-full h-auto list-none">
                {
                    notifyList && notifyList.map((item) => (
                        <li className="relative w-full h-full" key={item.id}>
                          {_dropDrownComp(item)}
                        </li>
                    ))
                }
            </ul>  
        </div>
        </>
       
    );
} 
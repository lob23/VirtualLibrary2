"use client"
import React from "react";
import noti from "./noti.json";
import _dropDrownComp from "./dropDownComp.js";
import { useState } from "react";
const temp  = ['a', 'b','c', 'd', 'e']; 
export default function Dropdown(){
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
                    noti.map((item) => (
                        <li className="relative w-full h-full">
                            {/* <_dropDrownComp/> */}
                            {_dropDrownComp(item)}
                        </li>
                    ))
                }
            </ul>  
        </div>
        </>
       
    );
} 
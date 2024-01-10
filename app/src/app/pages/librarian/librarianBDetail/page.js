"use client"
import React from "react";
import _detail from './librarianBDetail'
import { useRouter } from "next/navigation";

export default function screen() {

    const router = useRouter();

    const handleBackClick = () => {
        router.back();
    }

    return (
        <>
            <div className="w-screen h-screen overflow-hidden ">

                <div className="relative w-full h-[80px] px-10 border-b-2 border-x-0 border-t-0 border-solid border-blue border-opacity-40 z-10">
                    <img
                        className="absolute w-fit h-1/2 top-1/4"
                        src="/image/logo.png"
                        alt="Logo"
                    />
                </div>

                <div className="flex flex-row w-full h-full">
                    <div className="w-full h-full">
                        <div className="flex flex-wrap w-[100px] h-[60px] px-10 items-center" onClick={handleBackClick}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-2 text-blue cursor-pointer transform -rotate-90"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.707 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L10 5.414 3.707 11.707a1 1 0 1 1-1.414-1.414l6-6z"
                                />
                            </svg>
                            <p className="font-Gilroy_sb text-blue font-[20px]">Back</p>
                        </div>
                        <div className="w-full h-full mt-10">
                            <_detail />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
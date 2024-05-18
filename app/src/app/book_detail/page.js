"use client"
import React from "react";
import _detail from '@/app/book_detail/detail'
import _commentSection from "@/app/book_detail/comment_section"
import { useRouter, useSearchParams } from "next/navigation";
import { fetchAuthorById } from "../_api/book_detail/route";

export default function Book_detail_screen() {

    const router = useRouter();
    const searchParams = useSearchParams();

    const uid = searchParams.get('uid');

    const handleBackClick = async () => {
        const user = await fetchAuthorById(uid)
        if (user.User_authorizationLevel == 1){
            router.push("/homeReader?uid=" + uid);
        } else if (user.User_authorizationLevel == 2){
            router.push("/homeAuthor?uid=" + uid);     
        } else {
            router.push("/homeLiberian?uid=" + uid);     
        }
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
                    <div className="w-3/4 h-full">
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
                            <p className="font-Gilroy_sb text-blue font-[20px]">Back To Homepage</p>
                        </div>
                        <div className="w-full h-full mt-10">
                            <_detail />
                        </div>
                    </div>
                    <div className="w-1/4 h-full ">
                        <_commentSection />
                    </div>


                </div>


            </div>
        </>
    );
}
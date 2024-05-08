"use client"

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from 'react-loader-spinner'


export default function BooksettingForm() {
    const [bookTitle, setBookTitle] = useState("")
    const [bookGenre, setBookGenre] = useState("")
    const [bookLanguage, setBookLanguage] = useState("english")
    const [isLoading, setLoading] = useState(false)

    const searchParams = useSearchParams()
    const uid = searchParams.get('uid')

    const router = useRouter()


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isLoading && bookTitle && bookGenre && bookLanguage) {
            const createdDate = await new Date().toLocaleDateString('en-GB');
            const res = await fetch("api/composing", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    BDetail_title: bookTitle,
                    BDetail_genre: bookGenre,
                    BDetail_authorID: uid,
                    BDetail_language: bookLanguage,
                    BDetail_createdDay: createdDate,
                }),
            })

            const stat = await res.json().then(result => { return result })
            if (stat.stat == true) {
                setLoading(true)
                router.push('/pages/composer?uid=' + uid + '&bid=' + stat.data._id)
            } else {
                toast.error("error: " + stat.message, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000
                })
            }
        } else {
            toast.error("Please full fill the information.", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000
            })
        }

    }

    return (
        <>
            <div>
                <ToastContainer />
            </div>
            {!isLoading ?
                <div className="w-screen h-screen flex flex-wrap justify-center items-center bg-registerbg">
                    <div className="w-2/4 h-2/4 flex flex-col bg-white rounded-2xl">
                        <p className="font-Gilroy_sb text-blue text-3xl  ml-10 mt-10">Upload your story</p>
                        <p className="font-Gilroy_sb text-blue text-xl  ml-10 mt-10">Add detail</p>
                        <div className="w-4/5 h-fit ml-10">
                            <form className="grid grid-flow-row grid-cols-2">
                                <input className='row-span-1 m-5 font-Gilroy_md ' type='text' value={bookTitle} placeholder="Book Title" onChange={(e) => { setBookTitle(e.target.value) }} />
                                <input className='row-span-1 m-5 font-Gilroy_md ' type='text' value={bookGenre} placeholder="Book Genre" onChange={(e) => { setBookGenre(e.target.value) }} />

                                <select onChange={(e) => { setBookLanguage(e.target.value) }} className="row-span-1 border border-solid border-b-2 border-t-0 border-x-0 border-blue text-gray-500 text-sm bg-white font-Gilroy_md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-500 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-5">
                                    <option value="english">English</option>
                                    <option value="vietnamese">Vietnamese</option>
                                </select>



                            </form>
                            <button type='submit' className="h-[40px] w-1/5 outliner-none bg-blue text-white border-0 rounded-[100px] font-Gilroy_sb text-[20px] self-end" onClick={handleSubmit}>Submit</button>



                        </div>

                    </div >

                </div>




                :

                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                />
            }
        </>
    )
}


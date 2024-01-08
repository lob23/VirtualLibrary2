import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from 'react-loader-spinner'


export default function booksettingForm() {
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
                    BDetail_authorID: uid, //example. This should be replace by a way to get the ID of the user.
                    BDetail_language: bookLanguage,
                    BDetail_createdDay: createdDate,
                }),
            })

            const stat = await res.json().then(result => { return result })
            if (stat.stat == true) {
                setLoading(true)
                router.push('/pages/composer?uid=' + uid + '&id=' + stat.data._id + '&bDetailID=' + stat.data._id)
            } else {
                toast.error("error: " + stat, {
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

    // import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

    // export class CreateBookDto {
    // @IsNotEmpty()
    // BDetail_title: string;
    // @IsNotEmpty()
    // BDetail_genre: string;
    // @IsNotEmpty()
    // BDetail_authorID: string;
    // @IsString()
    // @IsNotEmpty()
    // @IsEnum(['english', 'vietnamese'])
    // BDetail_language: string;
    // BDetail_description: string;

    // BContent_content: string;


    return (
        <>
            {!isLoading ?
                <div className="w-auto h-full flex flex-col">
                    <p className="font-Gilroy_sb text-blue text-3xl">Upload your story</p>
                    <p className="font-Gilroy_sb text-blue text-xl my-5 ">Add detail</p>
                    <div className="w-4/5 h-fit">
                        <form className="grid grid-flow-row grid-cols-2">
                            <input className='row-span-1 m-5 font-Gilroy_md ' type='text' value={bookTitle} placeholder="Book Title" onChange={(e) => { setBookTitle(e.target.value) }} />
                            <input className='row-span-1 m-5 font-Gilroy_md ' type='text' value={bookGenre} placeholder="Book Genre" onChange={(e) => { setBookGenre(e.target.value) }} />

                            <select onChange={(e) => { setBookLanguage(e.target.value) }} className="row-span-1 border border-solid border-b-2 border-t-0 border-x-0 border-blue text-gray-300 text-sm bg-white font-Gilroy_md focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 m-5">
                                <option value="english">English</option>
                                <option value="vietnamese">Vietnamese</option>
                            </select>

                            <div className="flex flex-row my-5 ml-5">
                                <input className='w-4/5 font-Gilroy_md' type='text' value={bookGenre} placeholder="Upload cover" onChange={(e) => { setBookGenre(e.target.value) }} />
                                <button type='submit' className="h-[40px] w-1/5 outliner-none bg-blue text-white border-0 font-Gilroy_md ">Upload</button>
                            </div>

                        </form>
                        <button type='submit' className="h-[40px] w-1/5 outliner-none bg-blue text-white border-0 rounded-[100px] font-Gilroy_sb text-[20px]">Submit</button>



                    </div>

                </div >



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


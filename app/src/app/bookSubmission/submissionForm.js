"use client"
import dynamic from "next/dynamic";

import React, { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from 'react-loader-spinner'
import axios from '@/app/_api';
import config from '@/app/config';
import FormData from 'form-data';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useQuill } from "react-quilljs";
import { getBookContent } from "../_api/bookcontent/route";
import { putComposingBook } from "../_api/composing/route";
import { getBookDetail } from "../_api/book_detail/route";
import { Button } from "@mui/material";
import { summaryText } from "../_api/gemini/gemini-model";

export default function SubmissionForm({renderFunction}) {

    const router = useRouter();
    const searchParams = useSearchParams();

    const bid = searchParams.get('bid');

    const { quill, quillRef } = useQuill();
    const [bookTitle, setBookTitle] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [bookLanguage, setBookLanguage] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookCover, setBookCover] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [privacyVerified, setPrivacyVerified] = useState(false);
    const [copyrightVerified, setCopyrightVerified] = useState(false);

    const getBContent = async () => {
        const res = await getBookContent(bid);

        const result = await res.json()

        if (result.stat) {

            if (result.bookContent) {
                if (result.bookContent.BContent_content) {
                    return result.bookContent.BContent_content;
                } else {
                    console.log("Error");
                }
            }
        }
    }

    const convertToPDF = async (quill, bContent) => {
        const { default: htmlToDelta } = await import ('@/app/bookSubmission/htmlToDelta');
        const delta = await htmlToDelta(bContent);
        if (typeof window !== 'undefined') {
            const pdfBlob = await import('quill-to-pdf').then(({pdfExporter}) => pdfExporter.generatePdf(delta));
            console.log("bf");
            return pdfBlob;
        }
        return null;
    }

    const blobToBase64 = async (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onloadend = () => {
                const base64String = reader.result.split(',')[1];
                resolve(base64String);
            };

            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    }

    // submit for verification.
    const submit = async (e) => {
        // submit pdf file to database using fetch of UPDATE method.
        e.preventDefault()
        try {
            if (bookTitle && bookCover && bookDescription && bookLanguage && bookGenre) {
                const bContent = await getBContent();
                
                const content_delta = await convertToPDF(quill, bContent);
                if(content_delta != null){
                    const blobData = await blobToBase64(content_delta);

                    await axios.patch(config.BACKEND_URL + '/book/updateDescription', null, {
                        params: {
                            BDetail_id: bid,
                            description: bookDescription,
                        },
                    });

                    const status = await putComposingBook(
                        {
                            _id: bid,
                            BDetail_contentId: bid,
                            BContent_content: bContent,
                            BContent_pdf: blobData
                        }
                    );


                    const formData = new FormData();
                    formData.append('file', bookCover, {
                        filename: 'BookCover.png',
                        contentType: 'image/png'
                    });

                    const imgRes = await axios.patch(config.BACKEND_URL + `/book/updateBDetailImage/${bid}`, formData, {
                        maxContentLength: 10000000,
                        maxBodyLength: 10000000
                    });

                    if (status == true) {

                        if (!privacyVerified)
                            toast.warning("Please verify the privacy.", {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 3000
                            });
                        else if (!copyrightVerified)
                            toast.warning("Please verify the copy right.", {
                                position: toast.POSITION.TOP_CENTER,
                                autoClose: 3000
                            });
                        else router.push("/authorbookmanagement");

                    } else {
                        toast.error("The system cannot save your progress", {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 3000
                        });
                    }
                }
            } else {
                toast.error("Please full fill the information.", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000
                })
            }
        
        } catch (error) {
            toast.error("Please ensure you image is in png format", {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000
            });
        }
    }

    const onImageUploadChange = (event) => {
        console.log("hehe")
        if (event.target.files && event.target.files[0]) {
            console.log("hihi")

            setBookCover(event.target.files[0]);
        }
    }

    useEffect(() => {
        const fetchBookDetail = async () => {
            const res_json = await getBookDetail(bid);

            if (res_json.status == 200) {
                setBookTitle(res_json.data.BDetail_title);
                setBookGenre(res_json.data.BDetail_genre);
                setBookLanguage(res_json.data.BDetail_language)
                setLoading(false)
            } else {
                toast.error("error: " + res_json.data, {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000
                })
            }
        }

        fetchBookDetail();
    }, [bookTitle, bookGenre, bookLanguage])

    return (
        <>
            <div>
                <ToastContainer />
            </div>
            {!isLoading ?
                <div className='relative w-screen h-screen bg-registerbg bg-fixed overflow-hidden'>
                    <div className="absolute  -bottom-20 -right-20  w-[300px] h-[300px]">
                        <img
                            className="object-contain w-full h-full  "
                            src="/image/reg_cir.png"
                        ></img>
                    </div>
                    <div>
                        <ToastContainer />
                    </div>
                    <div className="absolute bottom-[20px] left-[120px]  w-[120px] h-[150px]">
                        <img
                            className="object-contain w-full h-full "
                            src="/image/reg_cir.png"
                        ></img>
                    </div>
                    <div className="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
                        <img
                            className="object-contain w-full h-full "
                            src="/image/reg_cir.png"
                        ></img>
                    </div>
                    <div className='absolute bg-white w-2/3 h-2/3 flex flex-col justify-center items-center rounded-2xl px-10 py-8 top-0 right-0 left-0 bottom-0 m-auto'>
                        <h2 className='font-Gilroy_sb text-3xl text-blue self-start'>
                            Upload your story
                        </h2>
                        <h3 className='font-Gilroy_sb text-xl text-blue mt-5 self-start'>
                            Add detail
                        </h3>
                        <div className='flex flex-row w-full h-1/3 gap-x-10 items-center mt-5'>
                            <div className='flex flex-col w-1/2 h-full gap-y-5 justify-center'>
                                <div className='flex flex-col w-full h-full'>
                                    <p className='font-Gilroy_sb text-blue text-base'>
                                        Title
                                    </p>
                                    <input disabled className='w-full border-blue mt-3'
                                        type='text'
                                        value={bookTitle}
                                        placeholder="Book Title" onChange={(e) => { setBookTitle(e.target.value) }}>
                                    </input>
                                </div>
                                <div className='flex flex-col w-full h-full'>
                                    <p className='font-Gilroy_sb text-blue text-base'>
                                        Genre
                                    </p>
                                    <input disabled className='w-full border-blue mt-3'
                                        type='text'
                                        value={bookGenre}
                                        placeholder='Book Genre' onChange={(e) => { setBookGenre(e.target.value) }}>
                                    </input>
                                </div>
                            </div>
                            <div className='flex flex-col w-1/2 h-full gap-y-5 justify-center'>
                                <div className='flex flex-col w-full h-full'>
                                    <p className='font-Gilroy_sb text-blue text-base'>
                                        Language
                                    </p>
                                    <select disabled defaultValue={bookLanguage} onChange={(e) => { setBookLanguage(e.target.value) }} className="w-full mt-3 h-5"
                                        placeholder={bookLanguage}>
                                        <option value="english">English</option>
                                        <option value="vietnamese">Vietnamese</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-full h-full'>
                                    <p className='font-Gilroy_sb text-blue text-base'>
                                        Image
                                    </p>
                                    <input className='w-full mt-3' type='file' value={undefined} placeholder='Book Cover' onChange={(e) => { onImageUploadChange(e) }}
                                        lang='en' />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col w-full h-1/3 gap-x-5'>
                            <p className='font-Gilroy_sb text-base text-blue'>
                                Description
                            </p>
                            <div className='relative w-full h-4/5 mt-3 border-b-2 border-solid border-blue border-opacity-40 flex items-center justify-center'>
                                <textarea 
                                    className='w-4/5 h-4/5 absolute outline-none border-none focus:border-0 focus:outline-0 resize-none'
                                    value={bookDescription}
                                    onChange={(e) => setBookDescription(e.target.value)}
                                />
                            </div>
   
                        </div>

                        <FormGroup>
                            <FormControlLabel required control={<Checkbox onChange={() => { setPrivacyVerified(!privacyVerified) }} />} label="I confirm that I wrote this book myself and take full legal responsibility. The content is entirely original and not copied from anywhere else." />
                            <FormControlLabel required control={<Checkbox onChange={() => { setCopyrightVerified(!copyrightVerified) }} />} label="I grant Literia the right to use my article and share the copyright" />
                        </FormGroup>
                        <div className='flex flex-row w-full h-[50px] mt-5 justify-end'>
                            <button className='w-fit h-fit rounded-full bg-blue px-5 py-2 text-white text-base self-end' onClick={(e) => { submit(e) }}>
                                Submit
                            </button>
                        </div>
                    </div>

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
    );
}
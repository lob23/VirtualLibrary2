"use client";

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import { Viewer } from '@react-pdf-viewer/core';
import { useEffect, useState } from 'react';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { useRouter, useSearchParams } from 'next/navigation';
import { updateStatus } from '@/app/pages/api/librarian/manageBook/route'

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import "react-toastify/dist/ReactToastify.css";
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const base64toBlob = (data) => {
    const pdfContentType = 'application/pdf';

    const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) out[length] = bytes.charCodeAt(length);

    return new Blob([out], { type: pdfContentType });
};

export default function _readingPage() {

    const searchParams = useSearchParams();
    const router = useRouter();

    // `base64String` is the given base 64 data
    const [_url, setURL] = useState("");
    const [base64String, setBase64String] = useState("");

    const uid = searchParams.get("uid");
    const bid = searchParams.get("bid");

    useEffect(() => {
        const fetchingBookContents = async () => {
            const res = await fetch("/pages/api/bookcontent?bid=" + bid, {
                method: "GET",
            });
            const result = await res.json();
            if ( result.stat && result.bookContent.BContent_pdf ) {
                console.log("book content: ", result.bookContent.BContent_pdf);
                setBase64String("data:application/pdf;base64," + result.bookContent.BContent_pdf);
            } else console.log("error", result.error)
        }
        fetchingBookContents()
    }, []);

    useEffect(() => {
            if (base64String){
                const blob = base64toBlob(base64String);
                const tURL = URL.createObjectURL(blob);
                setURL(tURL)
            }
    }, [base64String])

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
    const onBackClick = async() => {
        router.back()
    } 

    const handleAccept = () => {
        updateStatus(bid, 'verified');
        router.push('/pages/librarian/manageBook?uid=' + uid);
    }

    const handleReject = () => {
        updateStatus(bid, 'rejected');
        router.push('/pages/librarian/manageBook?uid=' + uid);
    }

    return (
        <>

            {base64String ?
                <div className='h-screen w-screen flex flex-col items-center overflow-y-hidden'>
                    <ToastContainer />
                    <div className='h-fit my-2 flex flex-row'>
                        <img
                            className="object-contain"
                            src="/image/logo.png">
                        </img>
                        <div className='flex flex-col w-[200px] h-fit ml-10'>
                            <button className='h-fit w-full font-Gilroy_sb py-2 px-4 bg-blue outline-none text-white text-md rounded-2xl border-none cursor-pointer hover:bg-opacity-30' 
                                    onClick={onBackClick}>
                                Back to View Book Detail
                            </button>
                            <div className='flex flex-row mt-2 gap-x-2'>
                            <button className="w-[100px] bg-green text-white px-3 py-2 text-md rounded-2xl self-end outline-none border-none cursor-pointer hover:bg-opacity-50" onClick={handleAccept}>Accept</button>
                            <button className="w-[100px] bg-red text-white px-3 py-2 text-md rounded-2xl self-end outline-none border-none cursor-pointer hover:bg-opacity-50" onClick={handleReject}>Reject</button>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='h-4/5 w-4/5'>
                        <Viewer fileUrl={_url} plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance,
                        ]} initialPage={0} />
                    </div>
                </div>
                :
                <div className='flex items-center justify-center h-screen '>
                    <Audio
                        height="80"
                        width="80"
                        radius="9"
                        color="blue"
                        ariaLabel="loading"
                    />
                </div>
            }
        
        </>

    )
}
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
    const [currentPage, setCurrentPage] = useState(0);
    const [initPage, setInitPage] = useState(1)
    const [isLoading, setLoading] = useState(true)

    const uid = searchParams.get("uid");
    const bid = searchParams.get("bid");

    const createRList = async() => {
        const res = await fetch("/pages/api/readingBook", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                RList_userId: uid,
                RList_bookId: bid,
                RList_currentPage: 0
            })
        })
    }

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


    useEffect(() => {
        const fetchCurrentPage = async () => {
            const res = await fetch("/pages/api/readingBook?uid=" + uid + "&bid=" + bid, {
                method: "GET",
            }).then((response) => {return response})

            const res_data = await res.json()

            if (res_data.stat == true)
            {
                if (res_data.data) setInitPage(res_data.data);
                setLoading(false)
            } 
            else {
                console.log("ERROR", res_data.data)
                setLoading(false)
            }
        }
        createRList()
        fetchCurrentPage()
    })

    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
    const onBackClick = async() => {
        const res = await fetch("/pages/api/readingBook", {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                RList_userId: uid,
                RList_bookId: bid,
                RList_currentPage: currentPage
            })
        })

        const res_data = await res.json();
        if( res_data.stat == true || initPage == currentPage ) router.back();
        else toast.error("ERROR: " + res_data.data, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000
            })
    } 

    const setPageChange = async (e) => {
        await setCurrentPage(e.currentPage)
        console.log("page change", e.currentPage)

    }

    const handleAccept = () => {
        updateStatus(bid, 'verified');
        router.push('/pages/librarian?uid=' + uid);
    }

    const handleReject = () => {
        updateStatus(bid, 'rejected');
        router.push('/pages/librarian?uid=' + uid);
    }

    return (
        <>

            {base64String && !isLoading ?
                <div className='h-screen w-screen flex flex-col items-center overflow-y-hidden'>
                    <ToastContainer />
                    <div className='h-fit'>
                        <img
                            className="object-contain"
                            src="/image/logo.png">
                        </img>
                        <button onClick={onBackClick}>Back to View Book Detail</button>
                        <button className="bg-green text-white px-3 py-1 rounded-md" onClick={handleAccept}>Accept</button>
                        <button className="bg-red text-white px-3 py-1 rounded-md" onClick={handleReject}>Reject</button>
                    </div>
                    <div className='h-4/5 w-4/5'>
                        <Viewer fileUrl={_url} plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance,
                        ]} initialPage={initPage} onPageChange={async (e) => await setPageChange(e)} />
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
"use client";

import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import { useEffect, useState } from 'react';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useSearchParams } from 'next/navigation';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Audio } from "react-loader-spinner";

const base64toBlob = (data) => {
    const pdfContentType = 'application/pdf';

    // Cut the prefix `data:application/pdf;base64` from the raw base 64
    const base64WithoutPrefix = data.substr(`data:${pdfContentType};base64,`.length);

    const bytes = atob(base64WithoutPrefix);
    let length = bytes.length;
    let out = new Uint8Array(length);

    while (length--) {
        out[length] = bytes.charCodeAt(length);
    }

    return new Blob([out], { type: pdfContentType });
};

export default function _readingpage() {
    const searchParams = useSearchParams();
    // `base64String` is the given base 64 data
    const [_url, seturl] = useState("");
    const [base64String, setBase64String] = useState("")

    const uid = searchParams.get("uid");
    const bDetailID = searchParams.get("bid");

    useEffect(() => {
        const fetchingBookContents = async () => {
            const res = await fetch("api/bookcontent?bid=" + bDetailID, {
                method: "GET",
            });
            const result = await res.json();
            if (result.stat == true) {
                console.log("book content: ", result.bookContent.BContent_pdf)
                setBase64String("data:application/pdf;base64," + result.bookContent.BContent_pdf);
            } else {
                console.log("error", result.error)
            }
        }
        fetchingBookContents()
    }, [])
    useEffect(() => {
        const blob = base64toBlob(base64String);
        const turl = URL.createObjectURL(blob);
        seturl(turl)
    }, [base64String]);

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <>
            {base64String ?
                <div className='h-screen w-screen flex flex-col items-center overflow-y-hidden'>
                    <div className='h-fit'>
                        <img
                            className="object-contain"
                            src="/image/logo.png">
                        </img>
                    </div>
                    <div className='h-4/5 w-4/5'>
                        <Viewer fileUrl={_url} plugins={[
                            // Register plugins
                            defaultLayoutPluginInstance
                        ]} />
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
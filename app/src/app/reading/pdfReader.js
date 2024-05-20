
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

import { useEffect, useState } from 'react';
// Core viewer
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import { useRouter, useSearchParams } from 'next/navigation';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Audio } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getReadingBook, postReadingBook, putReadingBook } from '../_api/readingBook/route';
import { getBookContent } from '../_api/bookcontent/route';

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
    const router = useRouter();

    // `base64String` is the given base 64 data
    const [_url, seturl] = useState("");
    const [base64String, setBase64String] = useState("");
    const [currentpage, setCurrentPage] = useState(0);
    const [initPage, setinitPage] = useState(0);
    const [isLoading, setLoading] = useState(true);
    const [isCreated, setCreated] = useState(false);

    const bDetailID = searchParams.get("bid");

    const createRlist = async () => {
        setCreated(true);
        const res = await postReadingBook(
            {
                RList_bookId: bDetailID,
                RList_currentPage: 0
            }
        );
    }

    useEffect(() => {
        const fetchingBookContents = async () => {
            const res = await getBookContent(bDetailID);

            const result = await res.json();

            if (result.stat == true && result.bookContent.BContent_pdf) {
                console.log("book content: ", result.bookContent.BContent_pdf)
                setBase64String("data:application/pdf;base64," + result.bookContent.BContent_pdf);

            } else {
                console.log("error", result.error)
            }
        }
        fetchingBookContents()
    }, []);

    useEffect(() => {
        if (base64String) {
            const blob = base64toBlob(base64String);
            const turl = URL.createObjectURL(blob);
            seturl(turl)
        }
    }, [base64String])


    useEffect(() => {
        const fetchCurrentPage = async () => {
            if(isCreated == false) await createRlist();
            const res_data = await getReadingBook(bDetailID).then((response) => { return response });
            console.log("res_data: ",res_data);

            if (res_data != null) {
                if (res_data.data) {
                    setinitPage(res_data.data);
                } else {
                }
                setLoading(false)
            } else {
                setLoading(false)
            }
        }
        
        fetchCurrentPage()
    }, [])

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const onBackClick = async () => {
        const res = await putReadingBook (
            {
                RList_bookId: bDetailID,
                RList_currentPage: currentpage
            }
        );

        const res_data = await res.json();
        if (res_data.stat == true || initPage == currentpage) {
            router.push("/book_detail?" + "bid=" + bDetailID)
        } else {
            toast.error("ERROR: " + res_data.data, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000
            })
        }
    }

    const setPageChange = async (e) => {
        await setCurrentPage(e.currentPage)
        console.log("page change", e.currentPage)

    }

    return (
        <>

            {base64String && !isLoading ?

                <div className='h-screen w-screen flex flex-col items-center overflow-y-hidden justify-center'>
                    <ToastContainer />

                    <div className='h-fit w-full flex flex-wrap justify-center'>
                        <img
                            className="object-contain"
                            src="/image/logo.png">
                        </img>

                    </div>
                    <button onClick={onBackClick} className='h-fit w-fit mr-[150px] font-Gilroy_sb py-2 px-4 bg-blue outline-none text-white rounded-full self-end '>Back to View Book Detail</button>

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
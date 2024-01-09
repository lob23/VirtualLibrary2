import React, {useState, useEffect,useCallback} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Audio } from 'react-loader-spinner'
import { pdfExporter } from "quill-to-pdf";
import { useQuill } from "react-quilljs";
import Quill from 'quill';
import axios from 'axios';
import config from '@/app/config';
import FormData from 'form-data';
import fs from 'fs';



function htmlToDelta(html) {
    const div = document.createElement('div');
    div.setAttribute('id', 'htmlToDelta');
    div.innerHTML = `<div id="quillEditor" style="display:none">${html}</div>`;
    document.body.appendChild(div);
    const quill = new Quill('#quillEditor', {
      theme: 'snow',
    });
    const delta = quill.getContents();
    document.getElementById('htmlToDelta').remove();
    return delta;
  }

export default function submission(){
    
    const router = useRouter();
    const searchParams = useSearchParams();

    const uid = searchParams.get('uid');
    const bid = searchParams.get('bid');

    const { quill, quillRef } = useQuill();
    const [bookTitle, setBookTitle] = useState("");
    const [bookGenre, setBookGenre] = useState("");
    const [bookLanguage, setBookLanguage] = useState("");
    const [bookDescription, setBookDescription] = useState("");
    const [bookCover, setBookCover] = useState(null);
    const [isLoading, setLoading] = useState(true)

    const getBContent = async() => {
        const res = await fetch("api/bookcontent?bid=" + bid,{
            method: "GET",
        })

        const result = await res.json()

        if (result.stat){

            if (result.bookContent){
                if(result.bookContent.BContent_content){
                    return result.bookContent.BContent_content;
                } else {
                    console.log("Error");
                }
            }
        }
    }

    const convertToPDF = async (quill, bContent) => {
        // Note: You can use this function. If there is problem when passing the quill data, just copy the two lines:
        
        const delta = await htmlToDelta(bContent)
        
        const pdfBlob = await pdfExporter.generatePdf(delta);

        return pdfBlob;
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
        try{
            if (bookTitle && bookCover && bookDescription && bookLanguage && bookGenre ){
                const bContent = await getBContent()
                const content_delta = await convertToPDF(quill, bContent)

                const res = await fetch("api/composing", {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify({
                        _id: bid,
                        BDetail_contentId: bid,
                        BContent_content: bContent,
                        BContent_pdf: await blobToBase64(content_delta),
                    }),
                });

                console.log("BOOK COVER: ", bookCover)

                const formData = new FormData();
                formData.append('file',  bookCover, {
                    filename: 'BookCover.png',
                    contentType: 'image/png'
                });

                const imgRes = await axios.patch(config.BACKEND_URL + `/book/updateBDetailImage/${bid}`,formData, {
                    maxContentLength: 10000000,
                    maxBodyLength: 10000000
                });
                
                const status = await res.json().then(result => {return result})
                if (status.stat == true){
                // router.push("/pages/authorbookmanagement?uid="+author) // temporary. Later, it will redirect to the list of book that composed and being composed by the author.
                    console.log('Complete, please check.')
                    console.log("stat: ", status.stat)
                    router.push("/pages/authorbookmanagement?uid=" + uid)
                } else {
                    toast.error("The system cannot save your progress", {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000
                    });
                }
            } else {
                toast.error("Please full fill the information.", {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000
                })
            }
        } catch(error){
            toast.error("Error: " + error, {
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
            const res = await fetch("api/book_detail?bid=" + bid);
            const res_json = await res.json();

            if(res_json.stat == true){
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
    },[bookTitle, bookGenre, bookLanguage])

    return (
        <>
        <div>
            <ToastContainer/>
        </div>
        {!isLoading? 

        <form className='w-3/5 max-w-md grid grid-cols-none grid-rows-10' onSubmit={submit}>
            <input className='row-span-1' type='text' value={bookTitle} placeholder="Book Title" onChange={(e) => {setBookTitle(e.target.value)}}/>
            
            <input className='row-span-1' type='text' value={bookGenre} placeholder="Book Genre" onChange={(e) => {setBookGenre(e.target.value)}}/>
            
            <select defaultValue={bookLanguage} onChange={(e) => {setBookLanguage(e.target.value)}} className="row-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="english">English</option>
                    <option value="vietnamese">Vietnamese</option>
            </select>

            <input className='row-span-1' type='text' value={bookDescription} placeholder="Book Description" onChange={(e) => {setBookDescription(e.target.value)}}/>
            
            <input className='row-span-1' type='file' value={undefined} placeholder='Book Cover' onChange={(e) => {onImageUploadChange(e)}}/>
            <button type='submit'>Submit</button>
        </form>

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
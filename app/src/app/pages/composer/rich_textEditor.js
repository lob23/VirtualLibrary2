"use client"// This is a client component 👈🏽
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useRef } from "react";
import { useQuill } from "react-quilljs";
import { Button } from "@material-tailwind/react";
import Modal from 'react-modal';

export default function IndexPage() {
  const router = useRouter()

  const { quill, quillRef } = useQuill();
  const [buttonPosition, setButtonPosition] = useState(0);
  const containerRef = useRef(null);
  const [notification, setNotification] = useState("");

  const searchParams = useSearchParams()
 
  const id = searchParams.get('id')
  const bDetailID = searchParams.get('bDetailID')
  console.log("id: ", id);
  console.log("bDetailID", bDetailID)

  useEffect(() => {
    // console.log(quill, quillRef);
    console.log("!");
    if (quill) quill.setText("Composing your story");
  });

  useEffect(() => {
    if (quill) {
      quill.on('text-change', (delta, oldDelta, source) => {
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
      });
    }
  }, [quill]);

  const save = async (e) => {
    e.preventDefault()
    const content_delta = await quill.getContents()
    const content = await quill.root.innerHTML.toString()
    console.log("content: ", content)
    const res = await fetch("api/composing", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        BDetail_contentId: bDetailID,
        BContent_content: content,
      }),
    });
    
    const status = await res.json().then(result => {return result})
    if (status.stat == true){
      router.push("/pages/home") // temporary. Later, it will redirect to the list of book that composed and being composed by the author.
    } else {
      toast.error("The system cannot save your progress", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    }
  }

  const submit = () => {

  }
  

  return (
    <>

      <div className='w-full h-1/5 grid grid-cols-5 grid-rows-2 place-items-center'>
        <img
            className="object-contain row-span-1 col-span-5"
            src="/image/logo.png">
        </img>
        
        <Button className='col-span-1 text-white bg-black' onClick={save}>Save and Back</Button>
        <div className='col-span-1'></div>
        <div className='col-span-1'></div>
        <div className='col-span-1'></div>
        <Button className='col-span-1 text-black bg-green-500'>Submit</Button>

      </div>

      <div className = 'w-full h-4/5'>
        <div ref = {quillRef}/>
      </div>
     
    </>
  );
}


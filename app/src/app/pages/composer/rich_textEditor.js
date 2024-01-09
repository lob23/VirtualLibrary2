"use client"// This is a client component 👈🏽
 
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useRef } from "react";
import { useQuill } from "react-quilljs";
import { Button } from "@material-tailwind/react";
import { Audio } from "react-loader-spinner";


export default function IndexPage() {
  const router = useRouter()

  const { quill, quillRef } = useQuill();

  const [buttonPosition, setButtonPosition] = useState(0);
  const containerRef = useRef(null);
  const [isLoading, setLoading] = useState(true);

  const searchParams = useSearchParams()
 
  const author = searchParams.get('uid') //user id
  const id = searchParams.get('id') // this is book detail's id.
  const bDetailID = searchParams.get('bDetailID') //ignore this
  console.log("id: ", id);
  console.log("bDetailID", bDetailID)


  // the following code responsible for fetching the content of the book, if any.
  // if the book has no content, the editor renders the default text "Composing your story"
  useEffect(() => {

    const fetchBookContent = async () => {
      const res = await fetch("api/bookcontent?bid=" + id,{
        method: "GET",
      })

      const result = await res.json()

      if (result.stat){

        if (result.bookContent){
          if(result.bookContent.BContent_content){
            if(quill){

              console.log("value: ", result.bookContent.BContent_content)
              
              const delta = await quill.clipboard.dangerouslyPasteHTML(result.bookContent.BContent_content);
              console.log("Delta: ", delta)
              //await quill.setContents(result.bookContent, 'silent');
            }
        } else {
          if (quill) {
              await quill.setText("Composing your story");
          }
        }
        setLoading(false)
    }
      } else{
        console.log("Fetching book error: ", result.error);
        if (quill) {
          await quill.setText("Composing your story");
        }
        setLoading(false)
      }
    }
    
    fetchBookContent();
  }, [quill]);

  // This code is used for test only.
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

  const saveContent = async (content) => {
    const res = await fetch("api/composing", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        _id: id,
        BDetail_contentId: bDetailID,
        BContent_content: content,
        BContent_pdf: null,
        BDetail_image: null
      }),
    });
    return res;
  }

  // Save the composing book. This allows the author to temporarily  save the progress and continue the composition later.
  const save = async (e) => {
    e.preventDefault()

    const content = await quill.root.innerHTML.toString()
    console.log("content: ", content)
    const res = await saveContent(content)
    
    const status = await res.json().then(result => {return result})
    if (status.stat == true){
      router.push("/pages/authorbookmanagement?uid=" + author) 
    } else {
      toast.error("The system cannot save your progress", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000
      });
    }
  }

  // submit for verification.
  const submit = async (e) => {
    // submit pdf file to database using fetch of UPDATE method.
    e.preventDefault()
    const content = await quill.root.innerHTML.toString()

    console.log("content: ", content)

    const save = await saveContent(content);
    const stat_save = await save.json().then(result => {return result});

    if(stat_save.stat == true){
      router.push("/pages/bookSubmission?uid=" + author + "&bid=" + bDetailID); 
    } else {
      toast.error("Error", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
      });
    }
  }
  

  return (
    <>
      <div>
        <ToastContainer />
      </div>
          {
          isLoading == true?
            <div className='flex items-center justify-center h-screen'>
              <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              />
            </div>
          :
          <div>
              <div className='w-full h-1/5 grid grid-cols-5 grid-rows-2 place-items-center'>
              <img
                  className="object-contain row-span-1 col-span-5"
                  src="/image/logo.png">
              </img>
              
              <Button className='col-span-1 text-white bg-black' onClick={save}>Save and Back</Button>
              <div className='col-span-1'></div>
              <div className='col-span-1'></div>
              <div className='col-span-1'></div>
              <Button className='col-span-1 text-black bg-green-500' onClick={submit}>Submit</Button>

            </div>

            <div className = 'w-full h-4/5'>
              <div ref = {quillRef}/>
            </div>
          </div>
        }
      
     
    </>
  );
}


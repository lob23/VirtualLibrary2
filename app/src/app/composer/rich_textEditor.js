"use client"// This is a client component 👈🏽
 
import { useSearchParams, useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState, useRef } from "react";
import { useQuill } from "react-quilljs";
import { Button } from "@material-tailwind/react";
import { Audio } from "react-loader-spinner";
import { putComposingBook } from "../_api/composing/route";
import { getBookDetail } from "../_api/book_detail/route";
import { getBookContent } from "../_api/bookcontent/route";
import { getRole } from "../_api/role";


export default function IndexPage() {
  const router = useRouter()

  const { quill, quillRef } = useQuill();

  const [isLoading, setLoading] = useState(true);

  const [isEditing, setEditing] = useState(false);

  const searchParams = useSearchParams()
 
  const bid = searchParams.get('bid') // this is book detail's id.
  // const bDetailID = searchParams.get('bDetailID') //ignore this
  console.log("bid: ", bid);


  // the following code responsible for fetching the content of the book, if any.
  // if the book has no content, the editor renders the default text "Composing your story"
  useEffect(() => {

    const fetchBookContent = async () => {
      const res_json = await getBookDetail(bid);

      // console.log("res_json: ", res_json);

      setEditing(res_json.data.BDetail_status == "editing");

      const res = await getBookContent(bid);

      const result = await res.json()

      if (result.stat){

        if (result.bookContent){
          if(result.bookContent.BContent_content){
            if(quill){

              console.log("value: ", result.bookContent.BContent_content)
              
              const delta = await quill.clipboard.dangerouslyPasteHTML(result.bookContent.BContent_content);
              console.log("Delta: ", delta)
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
    const res = await putComposingBook(
      {
        _id: bid,
        BContent_content: content,
        BContent_pdf: null,
        BDetail_image: null
      }
    );
    return res;
  }

  // Save the composing book. This allows the author to temporarily  save the progress and continue the composition later.
  const save = async (e) => {
    e.preventDefault()

    const content = await quill.root.innerHTML.toString()
    console.log("content: ", content)
    const status = await saveContent(content)
    
    if (status == true){
      router.push("/authorbookmanagement") 
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

    const stat_save = await saveContent(content);

    if(stat_save == true){
      router.push("/bookSubmission?" + "bid=" + bid); 
    } else {
      toast.error("Error", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000
      });
    }
  }

  const backToHome = async() => {
    const _role = await getRole();
    if( _role.User_authorizationLevel == 1 ) router.push("/homeReader");
    if( _role.User_authorizationLevel == 2 ) router.push("/homeAuthor");        
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
              onClick={()=>{backToHome()}}
                  className="object-contain row-span-1 col-span-5"
                  src="/image/logo.png">
              </img>

              {
                isEditing == true ? 
                  (<Button className='col-span-1 text-white bg-black' onClick={save}>Save and Back</Button>)
                 : (<></>)
              }
              
              
              <div className='col-span-1'></div>
              <div className='col-span-1'></div>
              <div className='col-span-1'></div>
              {
                isEditing == true ? 
                  (<Button className='col-span-1 text-black bg-green-500' onClick={submit}>Submit</Button>)
                 : (<></>)
              }
            </div>

            <div className = 'w-full h-4/5'>
              <div ref = {quillRef}/>
            </div>
          </div>
        }
      
     
    </>
  );
}


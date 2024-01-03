import React, { useEffect, useState, useRef } from "react";
import { useQuill } from "react-quilljs";
import { Button } from "@material-tailwind/react";


export default function IndexPage() {


  const { quill, quillRef } = useQuill({scrollingContainer: '.quill-container'});
  const [buttonPosition, setButtonPosition] = useState(0);
  const containerRef = useRef(null);

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

  const handleScroll = () => {
    const scrollPosition = containerRef.current.scrollTop;
    setButtonPosition(scrollPosition);

    containerRef.current.quill.root.addEventListener('scroll', () => {
      setButtonPosition(containerRef.current.quill.root.scrollTop);
    });
  };

  

  return (
    <>

      <div className='w-full h-1/5 grid grid-cols-5 grid-rows-2 place-items-center'>
        <img
            className="object-contain row-span-1 col-span-5"
            src="/image/logo.png">
        </img>
        
        <Button className='col-span-1 text-white bg-black'>Save and Back</Button>
        <div className='col-span-1'></div>
        <div className='col-span-1'></div>
        <div className='col-span-1'></div>
        <Button className='col-span-1 text-black bg-green-500'>Submit</Button>

      </div>

      <div className = 'w-full h-4/5'>
        <div  className="quill-container" ref = {quillRef}/>
      </div>
     
    </>
  );
}


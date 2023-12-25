import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";

export default function IndexPage() {


  const { quill, quillRef } = useQuill({scrollingContainer: '.quill-container'});

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
  

  return (
    <div className = 'w-full h-4/5'>
        <div  className="quill-container" ref = {quillRef}/>
    </div>
  );
}


"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../api/home/route";
import _footer from "@/app/pages/wrapper/footer"

const list = ['New', 'Money', 'Suit', 'And', 'Tie','New', 'Can', 'Read', 'Your', 'Mind', 'And', 'I', 'Know', 
'Your', 'Story', 'Fuck', 'Love', 'Shiba']

export default function ReaderHome() {

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        console.log( result );
        setBooks(result);
        setLoading(false);
      } catch (error) {
        // Handle error
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    // <div>
    //   {loading ? (
    //     // Loading state
    //     <p>Loading...</p>
    //   ) : (
    //     // Display books
    //     <ul>
    //       {books.map((book) => (
    //         <li key={book._id} style={{ color: 'black' }}>
    //           <h3>{book.BDetail_title}</h3>
    //           <p style={{ color: 'black' }}>Genre: {book.BDetail_genre}</p>
    //           <p style={{ color: 'black' }}>Author: {book.BDetail_authorID}</p>
    //           <p style={{ color: 'black' }}>Average Rating: {book.BDetail_averageRating}</p>
    //           {book.BDetail_image && (
    //             <img
    //               src={`data:image/png;base64,${book.BDetail_image}`}
    //               alt={`Book cover for ${book.BDetail_title}`}
    //               style={{ maxWidth: '100%', maxHeight: '200px' }}
    //             />
    //           )}
    //           {/* Add more details as needed */}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    
    


    <div className="relative w-full h-full overflow-y-auto overflow-hidden no-scrollbar">
      
        <div className="grid grid-flow-col grid-cols-2 relative w-full h-[900px] bg-white overflow-x-hidden">
          <div className="relative col-span-1 w-full h-fit">
            <h1 className="font-Gilroy_sb text-blue text-7xl w-full h-1/4">
              New & <br/>   Trending
            </h1>
            <p className="font-Gilroy_md text-black text-md w-1/2 mt-3 text-[20px] leading-8 overflow-hidden">
            Indulge in the latest and most captivating books, where every page invites you on a journey of imagination, intrigue, and discovery.
            </p>
          </div>
          <div className="col-span-1 relative w-full h-full overflow-hidden">
            <div className="absolute w-full h-full  overflow-hidden">
              <img className="object-cover w-full h-full  overflow-hidden"
                    src="/image/blur.png">
              </img>            
            </div> 
            
            <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0  overflow-hidden">
              <img className="object-scale-down w-full h-full  overflow-hidden"
                    src="/image/book_reader_home.png">
              </img>
            </div>
          </div>
        </div>
        
        <div className="relative w-full h-full">
          <div className="relative w-full h-1/2 mx-[20px] overflow-x-hidden">
            <h2 className="font-Gilroy_sb text-blue text-3xl w-auto h-1/6">
              Your reading list
            </h2>
            <ul className="relative flex flex-row gap-4 overflow-x-auto no-scrollbar w-screen h-full py-5">
              {
                list.map((item)=>(
                  <li className="relative w-full h-full">
                    {<_footer/>}
                  </li>
                ))
              }
            </ul>
          </div>

        </div>

        <div className="absolute w-screen h-[2000px] bg-yellow"></div>
     
  </div>


  );
}

{/* //const response = await fetch('http://localhost:3030/book/retrievePDF/658e8672fe9a28e26ec6be0d'); 

// // download-pdf.js
// import { useEffect } from 'react';
// import axios from 'axios';

// const ReaderHome = () => {
//   const downloadPDF = async () => {
//     try {
//       // Fetch the Base64-encoded PDF from the server
//       const response = await axios.get(
//         'http://localhost:3030/book/retrievePDF/658e8672fe9a28e26ec6be0d', // Replace with the appropriate URL
//       );

//       // Decode the Base64 string to binary data
//       const binaryData = atob(response.data);

//       // Create a Uint8Array from the binary data
//       const arrayBuffer = new Uint8Array(binaryData.length);
//       for (let i = 0; i < binaryData.length; i++) {
//         arrayBuffer[i] = binaryData.charCodeAt(i);
//       }

//       // Create a Blob from the binary data
//       const blob = new Blob([arrayBuffer], { type: 'application/pdf' });

//       // Create a link element and simulate a click to trigger the download
//       const link = document.createElement('a');
//       link.href = window.URL.createObjectURL(blob);
//       link.download = 'your-file-name.pdf'; // Replace with the desired file name
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error downloading PDF:', error);
//     }
//   };

//   useEffect(() => {
//     downloadPDF();
//   }, []);

//   return <div>Downloading PDF...</div>;
// };

// export default ReaderHome; */}
"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../api/home_author/route";

import _footer from "@/app/pages/wrapper/footer";
import _readingComp from "@/app/pages/wrapper/readingComp"
import _updateComp from "@/app/pages/wrapper/updateComp";
import Carousel from "@/app/pages/wrapper/Carousel";
import _authorStoryComp from "@/app/pages/wrapper/authorStoryComp";
const list1 = ['New', 'Money', 'Suit', 'Shiba', 'Tie','New']

const slides=[
  // "https://i.ibb.co/ncrXc2V/1.png",
  // "https://i.ibb.co/B3s7v4h/2.png",
  // "https://i.ibb.co/XXR8kzF/3.png",
  // "https://i.ibb.co/yg7BSdM/4.png",
  <_authorStoryComp/>,
  <_authorStoryComp/>,
  <_authorStoryComp/>,
]
export default function ReaderHome() {
  const authorID = '658e859e6168987e9653af10';
  const [books, setBooks] = useState([]);
  const [rlistBook, setRList] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {

        //book in latest update 
        const result = await fetchData();
        console.log( result );
        setBooks(result);
        setLoading(false);

        // Fetch reading list
        const rlistData = await fetchReadingList(authorID);
        const rbook = await rlistData.json()
        setRList(rbook);
        console.log('Reading list:', rbook);

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
    
    
<>
{books.length > 0 && (
      <div className="relative w-full h-fit overflow-y-auto overflow-hidden">
      <div className="grid grid-flow-col grid-cols-2 relative w-full h-[900px] bg-white overflow-x-hidden">
        <div className="relative col-span-1 w-full h-fit top-1/4 bottom-0 ml-10">
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
          
          <div className="absolute w-full h-full left-0 right-0 top-0 bottom-0 overflow-hidden">
            <img className="object-scale-down w-full h-full  overflow-hidden"
                  src="/image/book_reader_home.png">
            </img>
          </div>
        </div>
      </div>
        
      <div className="relative w-full h-full overflow-hidden">
        <div className="relative w-full h-1/2 overflow-hidden ml-10">
          <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ">
            Your reading list
          </h2>
          <ul className="relative flex flex-row gap-10 overflow-x-auto no-scrollbar w-full h-full py-5 list-none">
            {
              rlistBook.map((item)=>(
                <li className="relative w-full h-full">
                  {_readingComp(item)}
                </li>
              ))
            }
          </ul>
        </div>
  
        
          <div className="relative w-full h-1/2 overflow-hidden ml-10 mt-10">
            <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ">
              Latest update
            </h2>
            <ul className="relative flex flex-row gap-10 overflow-x-auto no-scrollbar w-full h-full py-5 list-none">
              {
                books.map((item)=>(
                  <li className="relative w-full h-full">
                    {_updateComp(item)}
                  </li>
                ))
              }
            </ul>
          </div>
        
        
      </div>
  
      <div className=" w-full h-full overflow-hidden">
        <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ml-10">
            Author's story
        </h2>
        <div className="w-full h-full">
          <Carousel autoSlide = {true} autoSlideInterval={5000}>
            {slides.map((s)=>(
                <div className=" w-full h-full z-50">
                    {s}
                </div>
            ))}
          </Carousel>
        </div>
      </div>  
    </div>
    )}
</>
    
  
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
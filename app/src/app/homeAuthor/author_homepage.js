"use client";
import { useEffect, useState } from "react";
import { fetchData, fetchBookByAuthorId, fetchReadingList, fetchAuthorById } from "../_api/home_author/route";
import _footer from "@/app/wrapper/footer";
import _readingComp from "@/app/wrapper/readingComp"
import _updateComp from "@/app/wrapper/updateComp";
import _authorStoryComp from "@/app/wrapper/authorStoryComp";
import _storyComp from "@/app/wrapper/storyComp";
import { useSearchParams, useRouter } from "next/navigation";
import {Circles} from "react-loader-spinner";

export default function AuthorHome() {
  const router = useRouter()
  const searchParams = useSearchParams()
  //'658e859e6168987e9653af10'
  const [books, setBooks] = useState([]);
  const [authorBook, setAuthorBook] = useState([]); 
  const [rlistBook, setRList] = useState([]); 
  const [loading, setLoading] = useState(true);

  const handleAuthorStoryClick =  (_bid) => {
    router.push("/authorbookmanagement?" + "bid=" + _bid);
  }

  const handleReadingListClick = (_bid) => {
    router.push("/book_detail?" + "bid=" + _bid);
  }

  const handleonGoingRead = (_bid) => {
    router.push("/reading?" + "bid=" + _bid)
  }

  useEffect(() => {
    const fetchDataBook = async () => {
      try {
        // Fetch book details
        const bookData = await fetchData();
        
        console.log('Book details:', bookData);

        // Fetch author details using the author ID from the book details
        const authorBookList = await fetchBookByAuthorId();
        
        console.log('Author details:', authorBookList);


         // Fetch reading list 
         const rlistData = await fetchReadingList();
         const rbook = await rlistData.json();
         setBooks(bookData);
         setAuthorBook(authorBookList);
         setRList(rbook);
         console.log('Reading list:', rbook);
         setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchDataBook();
  }, []);

  return (
    <>
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
      {loading?
            <div className="flex flex-wrap w-full h-full justify-center items-center mb-20">
              <Circles
              height="40"
              width="40"
              radius="9"
              color="blue"
              ariaLabel="loading"
              />
          </div>
        :
          <div className="relative w-full h-fit overflow-y-auto overflow-hidden">
              
            <div className="relative w-full h-full overflow-hidden">
              <div className="relative w-full h-1/2 overflow-hidden ml-10">
                <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ">
                  Your reading list
                </h2>
                <ul className="relative flex flex-row gap-x-4 overflow-x-auto no-scrollbar w-full h-full py-5 list-none">
                  {
                    rlistBook.map((item)=>(
                      <li key={item._id} className="w-full h-full mr-[50px]" onClick={() => {handleonGoingRead(item._id)}}>
                        {_readingComp(item)}
                      </li>
                    ))
                  }
                </ul>
              </div>

              <div className=" w-auto h-1/2 overflow-hidden">
                <div className="relative w-full h-1/2 overflow-hidden ml-10 mt-10">
                  <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ">
                    Your story
                  </h2>
                  <ul className="relative flex flex-row gap-x-4 overflow-x-auto no-scrollbar w-full h-full py-5 list-none">
                    {
                      authorBook.map((item)=>(
                        <li key={item._id} className="relative w-full h-full mr-[50px]" onClick={(i) => {
                          console.log("item: ", item)
                          handleAuthorStoryClick(item.BDetail_title.trim())
                        }}>
                          {_storyComp(item)}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div> 
            </div>

            <div className="relative w-full h-1/2 overflow-hidden ml-10 mt-10">
              <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ">
                Latest update
              </h2>
              <ul className="relative flex flex-row gap-x-4 overflow-x-auto no-scrollbar w-full h-full list-none mt-10">
                {
                  books.map((book, index) => (
                    <li key={index} className="w-full h-full mr-[50px]" 
                    onClick={() => {handleReadingListClick(book._id)}}>
                      {_updateComp(book, book.BDetail_authorFullname)}
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
      }
    </>
  );
}

{/* //const response = await fetch('http://localhost:3030/book/retrievePDF/658e8672fe9a28e26ec6be0d'); 

// // download-pdf.js
// import { useEffect } from 'react';
// import axios from '@/app/_api';

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
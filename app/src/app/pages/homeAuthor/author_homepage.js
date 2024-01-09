"use client";
import { useEffect, useState } from "react";
import { fetchData, fetchBookByAuthorId, fetchReadingList, fetchAuthorById } from "../api/home_author/route";
import _footer from "@/app/pages/wrapper/footer";
import _readingComp from "@/app/pages/wrapper/readingComp"
import _updateComp from "@/app/pages/wrapper/updateComp";
import _authorStoryComp from "@/app/pages/wrapper/authorStoryComp";
import _storyComp from "@/app/pages/wrapper/storyComp";
import { useSearchParams, useRouter } from "next/navigation";

export default function AuthorHome() {
  const router = useRouter()
  const searchParams = useSearchParams()
  //'658e859e6168987e9653af10'
  const authorID = searchParams.get('uid');
  const [books, setBooks] = useState([]);
  const [authorBook, setAuthorBook] = useState([]); 
  const [rlistBook, setRList] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [authorList, setAuthorList] = useState([]);

  const handleAuthorStoryClick =  (_uid, _bid) => {
    router.push("/pages/authorbookmanagement?uid=" + _uid + "&bid=" + _bid);
  }

  const handleReadingListClick = (_uid, _bid) => {
    router.push("/pages/book_detail?uid=" + _uid + "&bid=" + _bid);
  }

  useEffect(() => {
    const fetchDataBook = async () => {
      try {
        // Fetch book details
        const bookData = await fetchData();
        setBooks(bookData);
        console.log('Book details:', bookData);


        if(bookData.length > 0){
          const authorPromises = bookData.map(async(book) => {
            if('BDetail_authorID' in book){
              return fetchAuthorById(book.BDetail_authorID);
            } else{
              console.error('Home BDetail_authorID is undefined in a book');
              return null;
            }
          });

          const authorData = await Promise.all(authorPromises);
          setAuthorList(authorData);
          console.log('Author details:', authorData);
        } else{
          console.error('No books found in the array');
        }


        // Fetch author details using the author ID from the book details
        const authorDataList = await fetchBookByAuthorId(authorID);
        const authorBookList = await authorDataList.json()
        setAuthorBook(authorBookList);
        console.log('Author details:', authorBookList);


         // Fetch reading list 
         const rlistData = await fetchReadingList(authorID);
         const rbook = await rlistData.json()
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
        <ul className="relative flex flex-row gap-x-4 overflow-x-auto no-scrollbar w-full h-full py-5 list-none">
          {
            rlistBook.map((item)=>(
              <li className="w-full h-full mr-10">
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
                <li className="relative w-full h-full mr-[50px]" onClick={(i) => {
                  console.log("item: ", item)
                  handleAuthorStoryClick(item.BDetail_authorID, item.BDetail_title.trim())
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
            <li key={index} className="w-full h-full mr-10" 
            onClick={() => {handleReadingListClick(book.BDetail_authorID, book._id)}}>
              {_updateComp(book, authorList[index])}
            </li>
          ))
        }
      </ul>
    </div>
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
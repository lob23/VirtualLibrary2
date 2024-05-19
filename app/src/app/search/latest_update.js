import { useEffect, useState, Suspense } from "react";

import _updateComp from "@/app/wrapper/updateComp"
import { fetchData } from "../_api/search/route";
import {Circles} from "react-loader-spinner";
import { useRouter} from "next/navigation";
import { fetchAuthorById } from "../_api/book_detail/route";

export default function LatestUpdate() {

    const router = useRouter();

    const [books, setBooks] = useState([]);

    const [loading, setLoading] = useState(true);
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        const fetchDataBook = async () => {
            try {
                // Fetch book details
                const bookData = await fetchData();
                setBooks(bookData);

                if (bookData.length > 0) {
                    const authorPromises = bookData.map(async (book) => {
                        if ('BDetail_authorID' in book) {
                            return fetchAuthorById(book.BDetail_authorID);
                        } else {
                            console.error('Home BDetail_authorID is undefined in a book');
                            return null;
                        }
                    });

                    const authorData = await Promise.all(authorPromises);
                    setAuthorList(authorData);
                    console.log('Author details:', authorData);
                    setLoading(false);
                } else {
                    console.error('No books found in the array');
                }



            } catch (error) {
                console.error('Error fetching details:', error);
            }
        };

        fetchDataBook();
    }, []);

    return (
        <>
        <Suspense>
        {loading?
                <div className="flex flex-wrap w-full h-full justify-center items-center mt-10">
                    <Circles
                    height="40"
                    width="40"
                    radius="9"
                    color="blue"
                    ariaLabel="loading"
                    />
                </div>
            :
                <div className="relative w-full h-fit overflow-y-auto overflow-hidden ">

                    <div className="relative w-full h-1/2 overflow-hidden ml-10 mt-10">
                        <h2 className="font-Gilroy_sb text-blue text-3xl w-[500px] h-1/6 ">
                            Latest update
                        </h2>
                        <ul className="relative flex flex-row gap-x-4 overflow-x-auto no-scrollbar w-full h-full list-none mt-10 ">
                            {
                                books.map((item, index) => (
                                    <li key={item._id} className="w-full h-full mr-10" onClick={() => {router.push("/book_detail?"  + "bid=" + item._id)}} >
                                        {_updateComp(item, authorList[index])}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                {/* <div className="absolute w-full h-[2000px] bg-yellow"></div>
                */}
                </div>
        }
        </Suspense>
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
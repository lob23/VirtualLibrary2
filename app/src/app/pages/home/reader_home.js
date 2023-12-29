"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../api/home/route";

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
    <div>
      {loading ? (
        // Loading state
        <p>Loading...</p>
      ) : (
        // Display books
        <ul>
          {books.map((book) => (
            <li key={book._id} style={{ color: 'black' }}>
              <h3>{book.BDetail_title}</h3>
              <p style={{ color: 'black' }}>Genre: {book.BDetail_genre}</p>
              <p style={{ color: 'black' }}>Author: {book.BDetail_authorID}</p>
              <p style={{ color: 'black' }}>Average Rating: {book.BDetail_averageRating !== undefined ? book.BDetail_averageRating : 0}</p>
              {book.BDetail_image && (
                <img
                  src={`data:image/png;base64,${book.BDetail_image}`}
                  alt={`Book cover for ${book.BDetail_title}`}
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
              )}
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// const response = await fetch('http://localhost:3030/book/retrievePDF/658e8672fe9a28e26ec6be0d'); 

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

// export default ReaderHome;
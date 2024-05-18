"use client";
// // download-pdf.js
import { useEffect } from 'react';
import axios from '@/app/_api';

const Testing = () => {
  const downloadPDF = async () => {
    try {
      // Fetch the Base64-encoded PDF from the server
      const response = await axios.get(
        'http://localhost:3030/book/retrievePDF/65999d82d12ed5f32ea64822', // Replace with the appropriate URL
      );

      // Decode the Base64 string to binary data
      const binaryData = atob(response.data);

      // Create a Uint8Array from the binary data
      const arrayBuffer = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        arrayBuffer[i] = binaryData.charCodeAt(i);
      }

      // Create a Blob from the binary data
      const blob = new Blob([arrayBuffer], { type: 'application/pdf' });

      // Create a link element and simulate a click to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'your-file-name.pdf'; // Replace with the desired file name
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  useEffect(() => {
    downloadPDF();
  }, []);

  return <div>Downloading PDF...</div>;
};

export default Testing;
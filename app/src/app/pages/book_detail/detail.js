"use client";
import React, { useState, useEffect } from 'react';
import { fetchBookById, fetchAuthorById } from "../api/book_detail/route";

export default function detail() {
  const [loading, setLoading] = useState(true);
  const [books, setBook] = useState([]);
  const bookId = '65990aa41be251711bb1e186'; 
  useEffect(() => {
    const fetchDataID = async (a) => {
      // const bookId = '65990aa41be251711bb1e186'; 
      try {
        const bookData = await fetchBookById(a);
        
        setBook(bookData);
        console.log('Book details:', bookData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    const fetchDataAuthor = async (b) => {
      const authorId = '658e859e6168987e9653af10';
      console.log("check",authorId);
      try {
        const author= await fetchAuthorById(authorId);
        console.log('Author details:', author);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

     fetchDataID(bookId);
    //  fetchDataAuthor();
  }, []);

  const displayBookImage = () => {
    if (!loading && books) {
      const book = books;
      console.log("check",book.BDetail_title);
      return (
        <div className='w-20 h-10'>
          <h2>{book.BDetail_title}</h2>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  };
  const displayBookInfor = () => {
    if (!loading && books) {
      const book = books;
     
      return (
        <div className='w-full h-full flex flex-col overflow-hidden '>
           {/* <div className='w-20 h-10'>
             <p className='text-[40px] text-blue'>{book.BDetail_author}</p>
           </div> */}
           <p className='w-full h-fit  ml-5 font-Gilroy_md text-blue text-[20px]'>{book.BDetail_authorID}</p>
            <p className='w-full h-fit  ml-5 font-Gilroy_sb text-blue text-[40px]'>{book.BDetail_title}</p>
            <p className='w-fit h-fit ml-5 mr-5  font-Gilroy_md text-blue text-[12px]'>{book.BDetail_description}</p>
            <div className='w-9/10 h-fit ml-5 mr-5 overflow-hidden'>
               <hr className="h-[2px] w-full mr-5 my-8 bg-blue border-0 "></hr>
            </div>

            <div className='flex flex-row w-full h-fit  ml-5  text-blue'>
              <div className='flex flex-row w-full h-full'>
              <p className='font-Gilroy_sb text-blue font-[14px]'>Language</p>
              <p className='ml-2 font-Gilroy_sb text-blue/75 font-[14px]'>{book.BDetail_language}</p>

              </div>

              <div className='self-end flex flex-row w-full h-full'>
              <p className='font-Gilroy_sb text-blue font-[14px]'>Released day</p>
              <p className='ml-2 font-Gilroy_sb text-blue/75 font-[14px]'>{book.BDetail_publishedDay}</p>

              </div>
             
            </div>

        </div>
      
      );
    } else {
      return <p>Loading...</p>;
    }
  };


  return (
    <div className=' flex flex-row w-screen h-screen'>
      <div className='w-full h-full bg-blue'>

      </div>
      <div className='w-full h-full'>
         {displayBookInfor()}

      </div>
   
    </div>
  );
}
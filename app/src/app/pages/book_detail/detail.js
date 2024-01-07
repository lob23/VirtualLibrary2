"use client";
import React, { useState, useEffect } from 'react';
import { fetchBookById, fetchAuthorById } from "../api/book_detail/route";

export default function detail() {
  const [loading, setLoading] = useState(true);
  const [books, setBook] = useState([]);
  const [author, setAuthor] = useState([])
  const bookId = '65996c6d8f8412f4f66b60df';
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch book details
        const bookData = await fetchBookById(bookId);
        setBook(bookData);
        console.log('Book details:', bookData);

        // Fetch author details using the author ID from the book details
        const authorData = await fetchAuthorById(bookData.BDetail_authorID);
        setAuthor(authorData);
        console.log('Author details:', authorData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };

    fetchData();
  }, [bookId]);


  const displayBookImage = () => {
    if (!loading && books) {
      const book = books;
      console.log("check", book.BDetail_title);
      return (
        <div className='w-fit h-fit'>
          <img
            src={`data:image/png;base64,${book.BDetail_image}`}
            alt={`Book cover for ${book.BDetail_title}`}
            className='w-fit h-fit'
          />

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
          <p className='w-full h-fit  ml-5 font-Gilroy_md text-blue text-[20px] text-wrap'>{author.User_firstname}</p>
          <p className='w-full h-fit  ml-5 font-Gilroy_sb text-blue text-[40px] text-wrap'>{book.BDetail_title}</p>
          <p className='w-fit h-fit ml-5 mr-5  font-Gilroy_md text-blue text-[12px] text-wrap'>{book.BDetail_description}</p>
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
    <div className='w-full h-full flex flex-row justify-center'>
      <div className='mx-auto flex flex-col'>
        <div className='flex flex-wrap'>
          <img
            className=" relative"
            src="/image/Ellipse.png"
          ></img>
          <div className='absolute transform translate-x-[55px] ' >
            {displayBookImage()}

          </div>

        </div>
        <div>
          <button className='font-Gilroy_sb w-full h-[50px] mt-10 rounded-[100px] bg-blue text-white outline-none border-none'>Read now
          </button>
        </div>




      </div>
      <div className='w-1/2 mx-auto '>
        <div className=''>
          {displayBookInfor()}
        </div>

      </div>

    </div>
  );
}
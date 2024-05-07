import React, { useState, useEffect } from 'react';


export default function bookdetail(book, author) {
  console.log("check author", author);
  if (!book || !author) {

    return null;
  }



  return (
    <div className='flex flex-row w-full h-full overflow-hidden items-center '>
      <div className='w-2/5 h-4/5 rounded-[20px] overflow-hidden  '>
        <img
          src={`data:image/png;base64,${book.BDetail_image}`}
          alt={`Book cover for ${book.BDetail_title}`}
          className='w-full h-full  rounded-[20px] object-cover'
        />
      </div>
      <div className='flex flex-col w-full h-full justify-center mt-5 '>
        <p className='w-fit h-fit px-5 font-Gilroy_sb text-blue text-[30px]'>{book.BDetail_title}</p>
        {/* Check if author array is not empty and if the author at the index exists */}
        {author && (
          <p className='w-fit h-fit px-5 font-Gilroy_md text-blue text-[20px]'>{author.User_firstname}</p>
        )}
        <p className='w-fit h-fit px-5  font-Gilroy_md text-blue text-[12px]'>{book.BDetail_description}</p>

        <div className='w-full h-fit py-10 px-5'>
          <button className='w-fit h-fit px-5 py-2 rounded-[100px] bg-red outline-none border-none font-Gilroy_sb text-white'>{book.BDetail_genre}
          </button>
        </div>

      </div>


    </div>
  );
}
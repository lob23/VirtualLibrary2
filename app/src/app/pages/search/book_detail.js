"use client";
import React, { useState, useEffect } from 'react';


export default function bookdetail(book) {
  console.log("book", book);
  Z

  return (
    <div className='flex flex-row w-full h-full overflow-hidden '>
      <div className='w-1/3 h-full rounded-[20px] overflow-hidden  '>
        <img
          src={`data:image/png;base64,${book.BDetail_image}`}
          alt={`Book cover for ${book.BDetail_title}`}
          className='w-full h-full object-contain'
        />
      </div>
      <div className='flex flex-col w-full h-full '>
        <p className='w-full h-fit px-5 font-Gilroy_sb text-blue text-[30px]'>{book.BDetail_title}</p>
        <p className='w-full h-fit px-5 font-Gilroy_md text-blue text-[24px]'>Tess Sharpe</p>
        <p className='w-full h-fit px-5 font-Gilroy_md text-blue text-[12px]'>{book.BDetail_description}</p>

        <div className='w-full h-fit py-10 px-5'>
          <button className='w-fit h-[33px] px-5 py-2 rounded-[100px] bg-red outline-none border-none font-Gilroy_sb text-white'>{book.BDetail_genre}
          </button>
        </div>

      </div>


    </div>
  );
}
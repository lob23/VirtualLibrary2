"use client";
import React, { useState, useEffect } from 'react';


export default function bookdetail() {


  return (
    <div className='grid grid-flow-col w-full h-full '>
        <div className='w-full  rounded-[20px] overflow-hidden'>
            <img className='object-cover w-full h-full' src='/image/book_sample1.png'></img>
            </div>
        <div className='flex flex-col w-full h-full '>
            <p className='w-full h-fit px-5 font-Gilroy_sb text-blue text-[30px]'>The ocean at the end of the lane</p>
            <p className='w-full h-fit px-5 font-Gilroy_md text-blue text-[24px]'>Tess Sharpe</p>
            <p className='w-full h-fit px-5 font-Gilroy_md text-blue text-[12px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiav</p>

            <div className='w-full h-fit py-10 px-5'>
               <button className='w-fit h-[33px] px-5 py-2 rounded-[100px] bg-red outline-none border-none'>Romance
                </button>
            </div>
            
        </div>
      
      
    </div>
  );
}
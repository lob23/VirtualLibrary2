"use client";
import React from 'react';

export default function request_form() {
  return (
    <>
      <div className="w-screen h-screen grid grid-flow-col grid-cols-3">
        <div className='relative col-span-1 bg-orange'>
          <div className='absolute pt-10 pl-10 w-[60px] h-[60px]'>
            <img className='object-cover w-full h-full'
                 src='/image/logo.png'>
            </img>
          </div>
        </div>
        <div className='relative col-span-2 bg-white flex flex-col'>
          <div className='absolute w-2/3 h-2/3 top-0 bottom-0 right-0 left-0 m-auto'>
            <p className='font-Gilroy_sb text-blue text-3xl'>
              Author Submit form 
            </p>
            <input type='text' className='w-full h-1/2 border-l-rose-950 mt-10'/>
            <button className='w-full h-auto button_yellow px-8 py-2 mt-10'>
              Submit
            </button>

          </div> 
        </div>
      </div>
    </>
  );
};
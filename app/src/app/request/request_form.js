"use client";
import React, {useState} from 'react';
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";
import { postRequest } from '../_api/request/route';

export default function Request_form() {

  const [inputValue, setInputValue] = useState("");


  const router = useRouter();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Input Value:", inputValue);

    try {
      const stat = await postRequest(
        {
          Request_motivation: inputValue
        }
      );
  
  
      if (stat === true) {
        router.push('/homeReader');
      } else {
        toast.error("Error: You are currently an author." + stat.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error: You are currently an author.", error);
      toast.error("An error occurred. Please try again later.", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="w-screen h-screen grid grid-flow-col grid-cols-3">
        <div className='relative col-span-1 flex flex-col bg-cream '>
          <div className='w-[60px] h-[60px] ml-[40px] mt-[40px]'>
            <img className='object-cover w-full h-full'
                 src='/image/logo.png'>
            </img>
          </div>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='w-2/3 h-fit mx-10'>
              <img className='object-cover w-full h-full'
                    src="/image/reg_img1.png">
              </img>
            </div>
            <p className='font-Gilroy_sb text-xl text-blue mt-[40px]'>
              Become the author of your own stories
            </p>
          </div>
          
        </div>
        
        <div className='relative col-span-2 bg-white flex flex-col'>
          <div className='absolute w-2/3 h-2/3 top-0 bottom-0 right-0 left-0 m-auto'>
            
            <p className='font-Gilroy_sb text-blue text-3xl'>
              Author Submit form 
            </p>
            
            <div className='relative w-full h-4/5 mt-3 border-b border-solid border-blue border-opacity-40'>
                <textarea 
                    className='w-full h-full max-w-full max-h-full absolute top-0 left-0 outline-none border-none focus:border-0 focus:outline-0 p-2 resize-none'
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>

            <button
            onClick={handleSubmit} 
            className='w-full h-auto button_yellow px-8 py-2 mt-10 text-blue text-xl'>
              Submit
            </button>

          </div> 
        </div>
      </div>
    </>
  );
};
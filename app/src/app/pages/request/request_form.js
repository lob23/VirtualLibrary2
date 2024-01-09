"use client";
import React, {useState} from 'react';
import { toast } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";

export default function request_form() {

  const [inputValue, setInputValue] = useState("");

  const searchParams = useSearchParams()
  const userId = searchParams.get('uid')

  const router = useRouter();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Input Value:", inputValue);

    try {
      const res = await fetch("api/request", {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          Request_userId: userId, // This should be replaced later
          Request_motivation: inputValue,
        }),
      });
  
      const stat = await res.json();
  
      if (stat.stat === true) {
        router.push('/pages/homeReader?uid=' + userId);
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
        <div className='relative col-span-1 bg-cream'>
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
            
            <input type='text'
            value={inputValue}
            onChange={handleInputChange}
            className='w-full h-1/2 border-l-rose-950 mt-10'/>
            
            <button
            onClick={handleSubmit} 
            className='w-full h-auto button_yellow px-8 py-2 mt-10'>
              Submit
            </button>

          </div> 
        </div>
      </div>
    </>
  );
};
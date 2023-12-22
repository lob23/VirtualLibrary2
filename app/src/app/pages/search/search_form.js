"use client"; // This is a client component 👈🏽

import { useState } from "react";
import {Link} from "react-scroll"
import _footer from "@/app/pages/wrapper/footer"

export default function search_form() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here and update searchResults state
    // For simplicity, let's just log the search term for now
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <div class="relative w-screen h-screen bg-cream overflow-y-auto">
        <h1 className="static font-Gilroy_md text-blue text-4xl text-center mx-40 ml-40 mr-40 mt-60 mb-30 pb-5">
        Choose your stories
        </h1>
        <div class="relative z-40 mx-60 mt-20 flex items-center -bottom-7 h-14 rounded-lg bg-white overflow-hidden shadow-md shadow-blue-500/50">
              <div class="grid place-items-center h-full w-12 text-gray-300 p-2">
                <svg width="30" height="30" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1937">
                <path id="Stroke 455" d="M1.99965 35.854L11.0273 26.8263" stroke="#27219A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path id="Stroke 456" fill-rule="evenodd" clip-rule="evenodd" d="M21.3447 2C13.331 2 6.83593 8.4951 6.83593 16.5088C6.83593 24.5225 13.331 31.0176 21.3447 31.0176C29.3584 31.0176 35.8535 24.5225 35.8535 16.5088C35.8535 8.4951 29.3584 2 21.3447 2V2Z" stroke="#27219A" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                </svg>
              </div>

              <input
              class="h-full w-full text-lg text-gray-700 border-0 focus:border-0 shadow-none py-20 placeholder:text-blue placeholder:text-opacity-50 placeholder:font-Gilroy_md"
              type="text"
              id="search"
              placeholder="Enter the story or the author" /> 
              <button
              class="relative w-[150px] h-full my-5 bg-blue p-3 border-none shadow-none text-yellow text-xl font-Gilroy_md"
              type="submit">
              Search
              </button>
          </div>
          
          <div class="z-10">
            <div class="absolute top-[280px] -right-[20px]  w-[250px] h-[250px]">
                <img
                  class="object-contain w-full h-full  "
                  src="/image/reg_cir.png"
                ></img>
              </div>
            <div class="absolute top-[220px] left-[-120px]  w-[300px] h-[300px]">
                <img
                  class="object-contain w-full h-full "
                  src="/image/reg_cir.png"
                ></img>
              </div>
            <div class="absolute top-[350px] left-[120px]  w-[150px] h-[150px]">
                <img
                  class="object-contain w-full h-full "
                  src="/image/reg_cir.png"
              ></img>
            </div>
          </div>
          <div class="relative w-screen h-[2000px] bg-white"></div>
          <div>
            <_footer/>
      </div>
      </div>
      
    </>
  );
}

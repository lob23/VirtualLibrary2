"use client"; // This is a client component 👈🏽

import { useState } from "react";
export default function search_form() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here and update searchResults state
    // For simplicity, let's just log the search term for now
    console.log('Search term:', searchTerm);
  };

  return (
    <>
      <div class="relative w-screen h-screen bg-cream">
        <div class="z-40 mx-40 my-40 rounded-md flex items-center h-12 rounded-lg bg-white overflow-hidden shadow-md shadow-blue-500/50">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>
      
              <input
              class="h-full w-full text-sm text-gray-700 border-0 focus:border-0 shadow-none py-20 placeholder:text-blue"
              type="text"
              id="search"
              placeholder="Enter a book" /> 
              <button
              class=" w-[120px] my-5 bg-blue p-3 border-none shadow-none text-yellow text-lg font-Gilroy_md"
              type="submit">
              Search
              </button>
          </div>
        <div class="z-10">
          <div class="absolute -top-20 -right-20  w-[300px] h-[300px]">
              <img
                class="object-contain w-full h-full  "
                src="/image/reg_cir.png"
              ></img>
            </div>
          <div class="absolute top-[20px] left-[120px]  w-[120px] h-[150px]">
              <img
                class="object-contain w-full h-full "
                src="/image/reg_cir.png"
              ></img>
            </div>
          <div class="absolute top-[60px] right-[120px]  w-[80px] h-[80px]">
              <img
                class="object-contain w-full h-full "
                src="/image/reg_cir.png"
              ></img>
          </div>
        </div>
      </div>
      
    </>
  );
};

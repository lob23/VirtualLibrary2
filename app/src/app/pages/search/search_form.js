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
    <div class="relative w-screen h-screen">
        <div class="m-20 rounded-md flex items-center h-12 rounded-lg bg-white overflow-hidden shadow-lg">
            <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
    
            <input
            class="h-full w-full text-sm text-gray-700 border-0 focus:border-0 shadow-none py-20"
            type="text"
            id="search"
            placeholder="Enter a book" /> 
            <button
            class=" w-[100px] h-[60px] my-5 bg-blue p-3 border-none text-white text-base font-Gilroy_bd"
            type="submit">
            Search
            </button>
        </div>
    </div>
  );
};

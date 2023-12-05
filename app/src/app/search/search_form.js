"use client"; // This is a client component 👈🏽

import { useState } from "react";
import "./search.css"
import SearchBar from "./SearchBar";

export default function search_form() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here and update searchResults state
    // For simplicity, let's just log the search term for now
    console.log('Search term:', searchTerm);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {/* Display search results or other content here */}
    </div>
  );
};
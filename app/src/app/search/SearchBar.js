import React, { useState } from 'react';
import './search.css'; // Create a CSS file for additional styling

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-container">
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Enter the story or the author"
          value={searchTerm}
          onChange={handleInputChange}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
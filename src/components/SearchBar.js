// src/components/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
        className="border p-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;

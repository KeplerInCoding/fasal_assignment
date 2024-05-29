import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="flex justify-center mt-10" onSubmit={handleSearch}>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-l-md"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

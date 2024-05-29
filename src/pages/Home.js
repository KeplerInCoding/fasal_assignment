// src/pages/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [query, setQuery] = useState('');
  const [showList, setShowList] = useState(false);

  const handleSearch = async (query, page = 1) => {
    setQuery(query);
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=f65c909e&page=${page}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
        setTotalResults(parseInt(response.data.totalResults, 10));
        setCurrentPage(page);
      } else {
        setMovies([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const handleAddToList = (movie) => {
    setMovieList((prevList) => [...prevList, movie]);
  };

  const handlePageChange = (page) => {
    handleSearch(query, page);
  };

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center mt-10">
        <SearchBar onSearch={handleSearch} />
        <button
          onClick={() => setShowList(!showList)}
          className="bg-purple-500 text-white p-2 rounded"
        >
          {showList ? 'Hide List' : 'Show List'}
        </button>
      </div>
      {showList ? (
        <MovieList movies={movieList} onAddToList={handleAddToList} />
      ) : (
        <div className="flex flex-wrap justify-center mt-10">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onAddToList={handleAddToList} />
          ))}
        </div>
      )}
      {!showList && totalResults > 10 && (
        <div className="flex justify-center mt-10">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="bg-gray-500 text-white p-2 mx-1 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="p-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="bg-gray-500 text-white p-2 mx-1 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

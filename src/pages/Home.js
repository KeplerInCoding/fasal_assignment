// src/pages/Home.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import AddToListModal from '../components/AddToListModel';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${query}&apikey=f65c909e`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

  const handleAddToList = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <div className="container mx-auto mt-10">
      <SearchBar onSearch={handleSearch} />
      <button
        onClick={() => window.location.href = '/lists'}
        className="bg-purple-500 text-white p-2 rounded mt-4"
      >
        Your Lists
      </button>
      <div className="flex flex-wrap justify-center mt-10">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onAddToList={() => handleAddToList(movie)}
          />
        ))}
      </div>
      {showModal && (
        <AddToListModal
          movie={selectedMovie}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Home;

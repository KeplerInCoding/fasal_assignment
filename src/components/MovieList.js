// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onAddToList }) => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">My Movie List</h2>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onAddToList={onAddToList} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;

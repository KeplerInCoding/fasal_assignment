// src/components/MovieList.js
import React from 'react';

const MovieList = ({ movies, onAddToList }) => {
  return (
    <div className="flex flex-wrap justify-center mt-10">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="border p-4 m-2">
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <button onClick={() => onAddToList(movie)} className="bg-green-500 text-white p-2 rounded">
            Add to List
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;

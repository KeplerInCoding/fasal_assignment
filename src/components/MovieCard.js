// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie, onAddToList }) => {
  return (
    <div className="border p-4 m-2 w-64">
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={onAddToList} className="bg-green-500 text-white p-2 rounded">
        Add to List
      </button>
    </div>
  );
};

export default MovieCard;

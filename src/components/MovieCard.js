// src/components/MovieCard.js
import React, { useState } from 'react';

const MovieCard = ({ movie, onAddToList }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleAddToList = () => {
    onAddToList(movie);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={movie.Poster} alt={movie.Title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.Title}</div>
        <p className="text-gray-700 text-base">
          {movie.Plot ? (showDetails ? movie.Plot : `${movie.Plot.substring(0, 100)}...`) : 'Plot information not available.'}
        </p>
        {showDetails && movie.Plot && (
          <div className="mt-4">
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Released:</strong> {movie.Released}</p>
          </div>
        )}
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleToggleDetails}
          className="bg-blue-500 text-white p-2 rounded mr-2"
        >
          {showDetails ? 'Show Less' : 'More Details'}
        </button>
        <button
          onClick={handleAddToList}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add to List
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

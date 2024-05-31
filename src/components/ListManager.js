// src/components/ListManager.js
import React from 'react';
import MovieList from './MovieList';
import MovieCard from './MovieCard';

const ListManager = ({ showList, currentList, lists, handleAddToList, handleSaveList }) => {
  const [listName, setListName] = React.useState('');

  const saveList = () => {
    handleSaveList(listName);
    setListName('');
  };

  return (
    <div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter list name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={saveList} className="bg-blue-500 text-white p-2 rounded">Save List</button>
      </div>
      {showList ? (
        <MovieList movies={currentList} onAddToList={handleAddToList} />
      ) : (
        <div className="flex flex-wrap justify-center mt-10">
          {lists.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} onAddToList={handleAddToList} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ListManager;

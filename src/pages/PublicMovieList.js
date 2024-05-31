// src/pages/PublicMovieList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const PublicMovieList = () => {
  const { listId } = useParams();
  const [movieList, setMovieList] = useState(null);

  useEffect(() => {
    const fetchMovieList = async () => {
      const docRef = doc(db, 'movieLists', listId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().isPublic) {
        setMovieList(docSnap.data());
      } else {
        console.error('No such document or the list is not public!');
      }
    };

    fetchMovieList();
  }, [listId]);

  return (
    <div className="container mx-auto">
      {movieList ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">{movieList.name}</h1>
          <div className="flex flex-wrap justify-center">
            {movieList.movies.map((movie) => (
              <div key={movie.imdbID} className="p-4">
                <h2 className="text-xl">{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PublicMovieList;

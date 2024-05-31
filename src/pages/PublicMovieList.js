// src/pages/PublicMovieList.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import MovieCard from '../components/MovieCard';

const PublicMovieList = () => {
  const { listId } = useParams();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const q = query(collection(db, 'movieLists'), where('privacy', '==', 'public'), where('__name__', '==', listId));
        const querySnapshot = await getDocs(q);
        const movies = querySnapshot.docs.map(doc => doc.data().movie);
        setMovieList(movies);
      } catch (error) {
        console.error('Error fetching movie list:', error);
      }
    };

    fetchMovieList();
  }, [listId]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center mt-10">
        {movieList.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default PublicMovieList;

// src/pages/Lists.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../AuthContext';

const Lists = () => {
  const { user } = useAuth();
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      const q = query(collection(db, 'movieLists'), where('owner', '==', user.uid));
      const querySnapshot = await getDocs(q);
      setLists(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchLists();
  }, [user]);

  return (
    <div className="container mx-auto mt-10">
      <h2>Your Lists</h2>
      {lists.length === 0 ? (
        <p>No lists available.</p>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list.id} className="border p-2 mb-2">
              {list.name} ({list.isPublic ? 'Public' : 'Private'})
              <ul>
                {list.movies.map((movie) => (
                  <li key={movie.imdbID}>
                    {movie.Title} ({movie.Year})
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Lists;

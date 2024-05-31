// src/components/ListPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase'; // Import db from firebase

const ListPage = () => {
  const { listId } = useParams();
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const docRef = doc(db, 'movieLists', listId); // Update firestore to db
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.privacy === 'public' || data.userId === auth.currentUser?.uid) {
            setList(data);
          } else {
            alert('You do not have access to this list');
          }
        } else {
          alert('List not found');
        }
      } catch (error) {
        console.error('Error fetching list:', error);
      }
      setLoading(false);
    };

    fetchList();
  }, [listId]);

  if (loading) return <div>Loading...</div>;
  if (!list) return <div>List not found or you do not have access</div>;

  return (
    <div>
      <h1>{list.name}</h1>
      <ul>
        {list.movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;

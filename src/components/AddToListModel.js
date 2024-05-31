// src/components/AddToListModal.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../AuthContext';

const AddToListModal = ({ movie, onClose }) => {
  const { user } = useAuth();
  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState('');
  const [isPublic, setIsPublic] = useState(false);

  useEffect(() => {
    const fetchLists = async () => {
      const q = query(collection(db, 'movieLists'), where('owner', '==', user.uid));
      const querySnapshot = await getDocs(q);
      setLists(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    fetchLists();
  }, [user]);

  const handleCreateList = async () => {
    const newList = {
      name: listName,
      movies: [movie],
      owner: user.uid,
      isPublic: isPublic,
    };

    try {
      await addDoc(collection(db, 'movieLists'), newList);
      setLists((prevLists) => [...prevLists, newList]);
      onClose();
    } catch (error) {
      console.error('Error creating list:', error);
    }
  };

  const handleAddToList = async (listId) => {
    const listRef = db.collection('movieLists').doc(listId);
    try {
      await listRef.update({
        movies: db.FieldValue.arrayUnion(movie)
      });
      onClose();
    } catch (error) {
      console.error('Error adding to list:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2>Add "{movie.Title}" to a List</h2>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter list name"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            className="border p-2 mr-2"
          />
          <button onClick={handleCreateList} className="bg-blue-500 text-white p-2 rounded">
            Create New List
          </button>
        </div>
        <div className="mt-4">
          <label className="mr-2">Public</label>
          <input
            type="checkbox"
            checked={isPublic}
            onChange={() => setIsPublic(!isPublic)}
            className="toggle-checkbox"
          />
          <label className="ml-2">Private</label>
        </div>
        <div className="mt-4">
          <h3>Or Add to Existing List</h3>
          <ul>
            {lists.map((list) => (
              <li key={list.id} className="border p-2 mb-2">
                {list.name} ({list.isPublic ? 'Public' : 'Private'})
                <button
                  onClick={() => handleAddToList(list.id)}
                  className="bg-green-500 text-white p-2 ml-4 rounded"
                >
                  Add to List
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={onClose} className="bg-red-500 text-white p-2 rounded mt-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddToListModal;

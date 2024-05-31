

// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLA5Uds9VKAgMQJQBpjdj8W3BwqE21fxE",
  authDomain: "movie-library-9aa7e.firebaseapp.com",
  projectId: "movie-library-9aa7e",
  storageBucket: "movie-library-9aa7e.appspot.com",
  messagingSenderId: "119221746661",
  appId: "1:119221746661:web:3ecaf021ecb06b1457cd0c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, googleProvider, db };






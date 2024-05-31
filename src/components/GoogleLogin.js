// src/components/GoogleLogin.js
import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const GoogleLogin = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/'); // Redirect to home page after successful sign-in
    } catch (error) {
      console.error('Error signing in with Google: ', error);
    }
  };

  console.error('signing in');

  return (
    <div className="login-container">
      <h2>Sign in with Google</h2>
      <button onClick={handleGoogleLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import GoogleLogin from './components/GoogleLogin';
import Home from './pages/Home';
import PublicMovieList from './pages/PublicMovieList';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/public/:listId" element={<PublicMovieList />} />
          <Route path="/" element={<PrivateRoute element={Home} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import GoogleLogin from './components/GoogleLogin';
import Home from './pages/Home';
import Lists from './pages/Lists';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/" element={<PrivateRoute element={Home} />} />
          <Route path="/lists" element={<PrivateRoute element={<Lists />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

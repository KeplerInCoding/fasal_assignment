import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import GoogleLogin from './components/GoogleLogin';
import PublicMovieList from './pages/PublicMovieList';
import { AuthProvider} from './AuthContext';
import PrivateRoute from './PrivateRoute';

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/public/:listId" element={<PublicMovieList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

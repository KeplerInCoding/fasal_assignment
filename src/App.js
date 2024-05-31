import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GoogleLogin from './components/GoogleLogin';
import PublicMovieList from './pages/PublicMovieList';
import { AuthProvider} from './AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/Home'

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute element={Home} />} />
          <Route path="/login" element={<GoogleLogin />} />
          <Route path="/public/:listId" element={<PublicMovieList />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;

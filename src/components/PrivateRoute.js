// PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const PrivateRoute = ({ element: Element }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user ? <Element /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;

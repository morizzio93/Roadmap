import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import NavBar from './NavBar';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, username } = useAuth();
  return isAuthenticated ? (
    <>
      <NavBar username={username} />
      {children}
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;

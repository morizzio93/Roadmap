import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useAuth } from './AuthContext';

const NavBar = () => {
  const { username } = useAuth();

  return (
    <AppBar position="static">
      <Toolbar>
        {username && (
          <Typography variant="h6">
            {username}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

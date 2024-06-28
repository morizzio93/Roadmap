import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth } from './AuthContext';

const NavBar = () => {
  const { username, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {username && (
          <>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {username}
            </Typography>
            <Button color="inherit" onClick={handleClickOpen}>
              Log Out
            </Button>
          </>
        )}
      </Toolbar>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLogout} color="primary">
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
};

export default NavBar;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './AuthContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the username and password
    if (email === 'maurice@tran.com' && password === 'correct') {
      // Create the user object
      const user = {
        id: uuidv4(),
        email: email,
        password: password,
        isSuperadmin: true,
      };

      // Store the user object in localStorage
      localStorage.setItem('users', JSON.stringify(user));

      // Call the login function with the email
      login(email);

      // Redirect to the /features page
      navigate('/features');
    } else {
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        {/* Snackbar pour les messages d'erreur */}
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <MuiAlert onClose={handleSnackbarClose} severity="error" sx={{ width: '100%' }}>
            Incorrect or inexisting credentials
          </MuiAlert>
        </Snackbar>
      </form>
    </div>
  );
}

export default Login;

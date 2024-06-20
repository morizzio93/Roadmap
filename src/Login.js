import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from './AuthContext';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

function Login() {
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

    // Obtient les données du formulaire
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Valide le username et le password
    if (email === 'maurice@tran.com' && password === 'correct') {
      // Crée l'objet utilisateur
      const user = {
        id: uuidv4(),
        email: email,
        password: password,
        isSuperadmin: true,
      };

      // Stocke l'objet utilisateur dans localStorage
      localStorage.setItem('users', JSON.stringify(user));

      // Appelle la fonction de login avec l'email
      login(email);

      // Redirige vers la page /features
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
            name="email"
            required
          />
        </div>
        <div>
          <input
            placeholder="password"
            type="password"
            name="password"
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

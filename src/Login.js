import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useAuth } from "./AuthContext";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
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
    if (email === 'maurice-tran' && password === 'correct') {
      // Crée l'objet utilisateur
      const user = {
        id: uuidv4(),
        email: email,
        password: password,
        isSuperadmin: true,
      };

      // Store the user object in localStorage
      localStorage.setItem("users", JSON.stringify(user));

      // Appelle la fonction de login avec l'email
      login(email);

      // Redirect to the /features page
      navigate("/features");
    } else {
      setOpenSnackbar(true);
    }
  };

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      {/* Snackbar pour les messages d'erreur */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Incorrect or inexisting credentials
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default Login;

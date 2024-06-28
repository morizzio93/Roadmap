// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <ThemeProvider theme={defaultTheme}>
    <App />
  </ThemeProvider>
);

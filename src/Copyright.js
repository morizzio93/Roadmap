// Copyright.js
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mauricetran.fr/">
        Maurice Tran
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

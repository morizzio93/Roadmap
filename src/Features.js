import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import axios from "axios";

function Features() {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/features`, {
          headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
          },
        });
        setFeatures(response.data); // Assurez-vous que response.data contient un tableau de fonctionnalités
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatures();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error">
        {`Error: ${error}`}
      </Typography>
    );
  }

  return (
    <div>
      <Typography component="h1" variant="h5">
        Features
      </Typography>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Features;

import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = ({ fullScreen = false }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: fullScreen ? '100vh' : '100%',
        width: fullScreen ? '100vw' : '100%'
      }}
    >
      <CircularProgress color="primary" />
    </Box>
  );
};

export default Loader;
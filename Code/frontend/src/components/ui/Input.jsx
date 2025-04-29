import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ label, type = 'text', fullWidth = true, ...props }) => {
  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth={fullWidth}
      margin="normal"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
        ...props.sx
      }}
      {...props}
    />
  );
};

export default Input;
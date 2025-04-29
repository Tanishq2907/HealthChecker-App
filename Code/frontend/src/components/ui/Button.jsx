import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant = 'contained', color = 'primary', ...props }) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      sx={{
        textTransform: 'none',
        borderRadius: 2,
        px: 3,
        py: 1,
        ...props.sx
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
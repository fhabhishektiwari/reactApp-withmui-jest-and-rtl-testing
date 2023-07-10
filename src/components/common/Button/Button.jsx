import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = (props) => {
    const {children,size,variant,onClick,...other}=props;
  return (
    <MuiButton
      size={size}
      variant={variant || "contained"}
      onClick={onClick}
      disableRipple
      {...other}
    >
      {children}
    </MuiButton>
  );
}

export default Button

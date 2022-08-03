import { Typography } from '@mui/material';
import React from 'react';

export const Wrapper = ({ children, title }) => {
  return (
    <div style={{ padding: '20px 40px' }}>
      <Typography style={{ padding: '20px 10px' }} variant="h1">
        {title}
      </Typography>
      <hr />
      {children}
    </div>
  );
};

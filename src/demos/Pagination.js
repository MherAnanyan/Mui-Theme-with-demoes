import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Wrapper } from '../Wrapper';

export const Paginations = () => {
  return (
    <Wrapper title="Paginations">
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color="primary" />
        <Pagination count={10} color="secondary" />
        <Pagination count={10} disabled />
        <br />
        <br />
        <Pagination count={10} variant="outlined" />
        <Pagination count={10} variant="outlined" color="primary" />
        <Pagination count={10} variant="outlined" color="secondary" />
        <Pagination count={10} variant="outlined" disabled />
        <br />
        <br />
        <Pagination count={10} size="small" />
        <Pagination count={10} />
        <Pagination count={10} size="large" />
      </Stack>
    </Wrapper>
  );
};

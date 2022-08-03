/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Wrapper } from '../Wrapper';

const preventDefault = (event) => event.preventDefault();

export const Links = () => {
  return (
    <Wrapper title="Links">
      <div style={{ display: 'flex', gap: 80 }}>
        <Box
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          onClick={preventDefault}
        >
          <Link href="#" color="link.main" variant="h9">
            Enabled
          </Link>

          <Link
            href="#"
            color="link.main"
            variant="body3"
            underline="hover"
          >
            Enabled
          </Link>
          <Link href="#" color="link.primary" underline="none">
            Enabled
          </Link>
        </Box>
        <Box
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
          onClick={preventDefault}
        >
          <Link
            href="#"
            color="link.main"
            underline="always"
            variant="h9"
          >
            Hovered
          </Link>

          <Link
            href="#"
            color="link.main"
            variant="body3"
            underline="always"
          >
            Hovered
          </Link>
          <Link href="#" color="link.primary" underline="none">
            Hovered
          </Link>
        </Box>
      </div>
    </Wrapper>
  );
};

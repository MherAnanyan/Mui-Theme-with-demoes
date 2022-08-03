import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Wrapper } from '../Wrapper';

export const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Wrapper title="Bottom Navigation">
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction disabled icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Box>
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Label"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Enabled"
            color="secondary"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Disabled"
            disabled
            style={{ opacity: 0.5 }}
            icon={<FavoriteIcon />}
          />
        </BottomNavigation>
      </Box>
    </Wrapper>
  );
};

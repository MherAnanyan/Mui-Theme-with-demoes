import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const menuItemsArr = [
  'Menu item 1',
  'Menu item 2',
  'Menu item 3',
  'Menu item 4',
  'Menu item 5',
  'Menu item 6',
  'Menu item 7',
  'Menu item 8',
  'Menu item 9',
];
const ITEM_HEIGHT = 48;

export const Fixed = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Fixed
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: '30ch',
          },
        }}
      >
        {menuItemsArr.map((item) => (
          <MenuItem
            selected={item === 'Menu item 2'}
            key={item}
            onClick={handleClose}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

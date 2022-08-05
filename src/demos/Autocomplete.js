import { Autocomplete, TextField } from '@mui/material';
import { Wrapper } from '../Wrapper';

export const Autocompletes = () => {
  const sx = { m: 1, width: 320, display: 'inline-block' };
  const menuItems = new Array(10).fill(0).map((_, i) => `Item ${i}`);

  return (
    <Wrapper title="Autocomplete">
      <Autocomplete
        sx={sx}
        options={menuItems}
        filterSelectedOptions
        defaultValue={menuItems[0]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            color="primary2"
            label="Label"
          />
        )}
      />
      <Autocomplete
        sx={sx}
        options={menuItems}
        filterSelectedOptions
        defaultValue={menuItems[0]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            color="primary2"
            label="Label"
          />
        )}
      />
      <Autocomplete
        sx={sx}
        options={menuItems}
        filterSelectedOptions
        defaultValue={menuItems[0]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            color="primary2"
            label="Label"
          />
        )}
      />

      <br />
      <br />

      <Autocomplete
        sx={sx}
        multiple
        options={menuItems}
        defaultValue={[menuItems[0], menuItems[1]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            color="primary2"
            label="Label"
            placeholder="Value"
          />
        )}
      />
    </Wrapper>
  );
};

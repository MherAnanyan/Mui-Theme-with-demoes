import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Wrapper } from '../Wrapper';

export const TextFields = () => {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const sx = { m: 1, minWidth: 220 };
  return (
    <Wrapper title="TextFields">
      <br />
      <br />

      <TextField sx={sx} label="Label" variant="standard" />
      <TextField sx={sx} label="Label" variant="standard" focused />
      <TextField sx={sx} label="Label" variant="standard" error />
      <TextField sx={sx} label="Label" variant="standard" disabled />

      <br />
      <br />

      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        defaultValue="Value"
      />

      <br />
      <br />

      <TextField sx={sx} label="Label" variant="standard" />
      <TextField
        sx={sx}
        label="Label"
        variant="standard"
        size="small"
      />

      <br />
      <br />

      <FormControl sx={sx} variant="standard">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          label="Password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2" defaultValue={1}>
          <MenuItem value={1}>
            <VisibilityIcon />
          </MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2">
          <MenuItem value={1}>Value</MenuItem>
        </Select>
        <FormHelperText variant="standart">
          Helper text
        </FormHelperText>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2"></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select
          variant="outlined"
          color="primary2"
          // defaultOpen
          focus
        ></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2" error></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2" disabled></Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2" defaultValue={1}>
          <MenuItem value={1}>Value</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2"></Select>
      </FormControl>
      <FormControl sx={sx} size="small">
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2"></Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2" defaultValue={1}>
          <MenuItem value={1}>
            <VisibilityIcon />
          </MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="outlined" color="primary2">
          <MenuItem value={1}>Value</MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2"></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select
          variant="filled"
          color="primary2"
          // defaultOpen
        ></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2" error></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2" disabled></Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2" defaultValue={1}>
          <MenuItem value={1}>Value</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2"></Select>
      </FormControl>
      <FormControl sx={sx} size="small">
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2"></Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2" defaultValue={1}>
          <MenuItem value={1}>
            <VisibilityIcon />
          </MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel>Label</InputLabel>
        <Select variant="filled" color="primary2">
          <MenuItem value={1}>Value</MenuItem>
        </Select>
        <FormHelperText>Helper text</FormHelperText>
      </FormControl>
    </Wrapper>
  );
};

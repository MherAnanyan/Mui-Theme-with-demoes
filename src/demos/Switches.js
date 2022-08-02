import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';

const Switches = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch />} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
      <FormControlLabel control={<><Switch defaultChecked color="secondary"/><Switch defaultChecked color="secondary"/></>} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel control={<><Switch defaultChecked color="primary"/><Switch defaultChecked color="primary"/></>} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel control={<><Switch defaultChecked color="error"/><Switch defaultChecked color="error"/></>} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel control={<><Switch defaultChecked color="warning"/><Switch defaultChecked color="warning"/></>} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel control={<><Switch defaultChecked color="info"/><Switch defaultChecked color="info"/></>} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel control={<><Switch defaultChecked color="success"/><Switch defaultChecked color="success"/></>} label={<Typography color="text.primary">Label</Typography>} />
      <FormControlLabel control={<><Switch /><Switch /></>} label={<Typography color="text.primary">Label</Typography>} />
    </FormGroup>
  );
}

export default Switches;
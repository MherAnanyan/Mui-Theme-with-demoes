import { FormControlLabel, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Wrapper } from '../Wrapper';

export const MuiCheckbox = () => {
  return (
    <Wrapper title="Checkbox">
      <br />
      <br />
      <Checkbox />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox disabled />
      <FormControlLabel
        disabled
        control={<Checkbox />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox disabled defaultChecked />
      <FormControlLabel
        disabled
        control={<Checkbox defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox color="primary2" defaultChecked />
      <FormControlLabel
        control={<Checkbox color="primary2" defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox color="primary" defaultChecked />
      <FormControlLabel
        control={<Checkbox color="primary" defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox color="error" defaultChecked />
      <FormControlLabel
        control={<Checkbox color="error" defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox color="warning" defaultChecked />
      <FormControlLabel
        control={<Checkbox color="warning" defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox color="info" defaultChecked />
      <FormControlLabel
        control={<Checkbox color="info" defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox color="success" defaultChecked />
      <FormControlLabel
        control={<Checkbox color="success" defaultChecked />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox />
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Checkbox defaultChecked indeterminate />
      <FormControlLabel
        label={<Typography color="text.primary">Label</Typography>}
        control={<Checkbox defaultChecked indeterminate />}
      />
    </Wrapper>
  );
};

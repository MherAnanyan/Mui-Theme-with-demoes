import { FormControlLabel, Radio, Typography } from "@mui/material"

const Radios = () => {
  return (
    <>
      <br />
      <br />
      <Radio />
      <FormControlLabel
        control={<Radio />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio disabled/>
      <FormControlLabel control={<Radio />} label="Label" disabled />

      <br />
      <br />
      <Radio defaultChecked disabled />
      <FormControlLabel
        disabled
        control={<Radio defaultChecked />}
        label="Label"
      />

      <br />
      <br />
      <Radio color="primary" defaultChecked />
      <FormControlLabel
        control={<Radio defaultChecked color="primary" />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio color="secondary" defaultChecked />
      <FormControlLabel
        control={<Radio defaultChecked color="secondary" />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio color="error" defaultChecked />
      <FormControlLabel
        control={<Radio defaultChecked color="error" />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio color="warning" defaultChecked />
      <FormControlLabel
        control={<Radio defaultChecked color="warning" />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio color="info" defaultChecked />
      <FormControlLabel
        control={<Radio defaultChecked color="info" />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio color="success" defaultChecked />
      <FormControlLabel
        control={<Radio defaultChecked color="success" />}
        label={<Typography color="text.primary">Label</Typography>}
      />

      <br />
      <br />
      <Radio />
      <FormControlLabel
        control={<Radio />}
        label={<Typography color="text.primary">Label</Typography>}
      />
    </>
  )
}

export default Radios

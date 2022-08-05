import { TextField } from '@mui/material';
import { Wrapper } from '../Wrapper';

export const Multilines = () => {
  const sx = { m: 1, width: 220 };

  return (
    <Wrapper title="Multiline">
      <TextField
        sx={sx}
        variant="standard"
        color="primary2"
        label="Label"
        multiline
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />
      <TextField
        sx={sx}
        variant="standard"
        color="primary2"
        label="Label"
        multiline
        focused
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />
      <TextField
        sx={sx}
        variant="standard"
        color="primary2"
        label="Label"
        multiline
        error
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />
      <TextField
        sx={sx}
        variant="standard"
        color="primary2"
        label="Label"
        multiline
        disabled
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />

      <br />
      <br />

      <TextField
        sx={sx}
        variant="standard"
        color="primary2"
        label="Label"
        rows={5}
        multiline
        value="Lorem Ipsum is simply dummy text of the printing"
      />

      <br />
      <br />

      <TextField
        sx={sx}
        variant="standard"
        color="primary2"
        label="Label"
        maxRows={5}
        multiline
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />

      <br />
      <br />

      <TextField
        // TODO
        sx={sx}
        variant="outlined"
        color="primary2"
        label="Label"
        multiline
        maxRows={1.5}
        size="small"
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />

      <br />
      <br />

      <TextField
        sx={sx}
        variant="filled"
        color="primary2"
        label="Label"
        multiline
        value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley"
      />
    </Wrapper>
  );
};

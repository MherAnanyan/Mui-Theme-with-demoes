import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Wrapper } from '../Wrapper';

export const Selects = () => {
  const sx = { m: 1, minWidth: 220 };

  return (
    <Wrapper title="Selects">
      <br />
      <br />
      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2"></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select
          variant="standard"
          color="primary2"
          // defaultOpen
          active
        ></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2" error></Select>
      </FormControl>
      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2" disabled></Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2" defaultValue={1}>
          <MenuItem value={1}>Value</MenuItem>
        </Select>
      </FormControl>

      <br />
      <br />

      <FormControl sx={sx}>
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2"></Select>
      </FormControl>
      <FormControl sx={sx} size="small">
        <InputLabel variant="standard">Label</InputLabel>
        <Select variant="standard" color="primary2"></Select>
      </FormControl>

      <br />
      <br />

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

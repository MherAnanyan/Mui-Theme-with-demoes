import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (<>
  <br/><br/>
  <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
  <ToggleButton value="left" aria-label="left aligned" size='large'>
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="left aligned" size='medium'>
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="left aligned" size='small'>
        <FormatAlignLeftIcon />
      </ToggleButton>
      </ToggleButtonGroup>
  <br/><br/>
  <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      size="small"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="justified" >
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>

    <br/><br/>
  <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      size="medium"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="justified" >
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>

    <br/><br/>
  <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      size="large "
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="left" aria-label="justified" >
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>




  </>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Wrapper } from '../Wrapper';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '',
  },
  {
    value: 20,
    label: '',
  },

  {
    value: 30,
    label: '',
  },
  {
    value: 40,
    label: '',
  },
  {
    value: 50,
    label: '',
  },
  {
    value: 60,
    label: '',
  },

  {
    value: 70,
    label: '',
  },
  {
    value: 80,
    label: '',
  },
  {
    value: 90,
    label: '',
  },
  {
    value: 100,
    label: '100',
  },
];

function valuetext(value) {
  return `${value}`;
}

const Sliders = () => {
  return (
    <Wrapper title="Sliders">
      <Box sx={{ width: 300, margin: '10px' }}>
        <Slider
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
        />

        <Slider
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          disabled
        />

        <Slider
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />

        <Slider
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
          disabled
        />
        <Slider
          color="primary2"
          getAriaLabel={() => 'Temperature range'}
          value={[20, 40]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
        />
        <Slider
          color="primary2"
          getAriaLabel={() => 'Temperature range'}
          value={[20, 40]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
          disabled
        />

        <Slider
          color="primary"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
        />

        <Slider
          color="secondary"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
        />

        <Slider
          color="primary2"
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />

        <Slider
          color="primary2"
          size="medium"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
      <Box sx={{ height: 300 }}>
        <Slider
          orientation="vertical"
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
        />

        <Slider
          orientation="vertical"
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          disabled
        />

        <Slider
          orientation="vertical"
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
        />

        <Slider
          orientation="vertical"
          color="primary2"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
          marks={marks}
          disabled
        />
        <Slider
          orientation="vertical"
          color="primary2"
          getAriaLabel={() => 'Temperature range'}
          value={[20, 40]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
        />
        <Slider
          orientation="vertical"
          color="primary2"
          getAriaLabel={() => 'Temperature range'}
          value={[20, 40]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
          disabled
        />

        <Slider
          orientation="vertical"
          color="primary"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
        />

        <Slider
          orientation="vertical"
          color="secondary"
          aria-label="Custom marks"
          defaultValue={20}
          getAriaValueText={valuetext}
          step={10}
          valueLabelDisplay="auto"
        />

        <Slider
          orientation="vertical"
          color="primary2"
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />

        <Slider
          orientation="vertical"
          color="primary2"
          size="medium"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
      </Box>
    </Wrapper>
  );
};

export default Sliders;

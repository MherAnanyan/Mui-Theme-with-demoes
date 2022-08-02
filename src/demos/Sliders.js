// import { Slider } from "@mui/material"

// const Sliders = () => {
//   const marks = [
//     {
//       value: 0,
//       label: '0°C',
//     },
//     {
//       value: 20,
//       label: '20°C',
//     },
//     {
//       value: 37,
//       label: '37°C',
//     },
//     {
//       value: 100,
//       label: '100°C',
//     },
//   ];
//   return (
//     <>
//       <br />
//       <br />
//       <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color=""/>
//       <br />
//       <br />
//       <Slider
//         aria-label="Custom marks"
//         defaultValue={30}
//         valueLabelDisplay="auto"
//         step={10}
//         marks={marks}
//         min={10}
//         max={110}

//       />
//     </>
//   )
// }

// export default Sliders

import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "",
  },
  {
    value: 20,
    label: "",
  },

  {
    value: 30,
    label: "",
  },
  {
    value: 40,
    label: "",
  },
  {
    value: 50,
    label: "",
  },
  {
    value: 60,
    label: "",
  },

  {
    value: 70,
    label: "",
  },
  {
    value: 80,
    label: "",
  },
  {
    value: 90,
    label: "",
  },
  {
    value: 100,
    label: "100",
  },
]

function valuetext(value) {
  return `${value}`
}

function preventHorizontalKeyboardNavigation(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault()
  }
}

const Sliders = () => {
  return (
    <>
      <Box sx={{ width: 300, margin: "10px" }}>
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
          getAriaLabel={() => "Temperature range"}
          value={[20, 40]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
        />
        <Slider
          color="primary2"
          getAriaLabel={() => "Temperature range"}
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
          getAriaLabel={() => "Temperature range"}
          value={[20, 40]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          marks={marks}
        />
        <Slider
          orientation="vertical"
          color="primary2"
          getAriaLabel={() => "Temperature range"}
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
    </>
  )
}

export default Sliders

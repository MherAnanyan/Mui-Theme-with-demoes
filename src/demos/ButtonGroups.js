import { Button } from "@mui/material"
import ButtonGroup from "@mui/material/ButtonGroup"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Box from "@mui/material/Box"

const ButtonGroups = ({mode}) => {
  return (
    <>
      <br />
      <br />

      <ButtonGroup variant="contained" color={mode === "light" ? "secondary" : "primary"}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br />
      <br />

      <ButtonGroup variant="outlined" color={mode === "light" ? "secondary" : "primary"}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br />
      <br />

      <ButtonGroup variant="text" color={mode === "light" ? "secondary" : "primary"}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <br />
      <br />

      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="contained"
          color={mode === "light" ? "secondary" : "primary"}
        >
          <Button key="one">One</Button>
          <Button key="two">Two</Button>
          <Button key="three">Three</Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical outlined button group"
          color={mode === "light" ? "secondary" : "primary"}
        >
          <Button key="one">One</Button>
          <Button key="two">Two</Button>
          <Button key="three">Three</Button>
        </ButtonGroup>
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
          color={mode === "light" ? "secondary" : "primary"}
        >
          <Button key="one">One</Button>
          <Button key="two">Two</Button>
          <Button key="three">Three</Button>
        </ButtonGroup>
      </Box>

      <br />
      <br />

      <ButtonGroup size="large" variant="contained" color={mode === "light" ? "secondary" : "primary"}>
        <Button>LARGE</Button>
        <Button>LARGE</Button>
        <Button>LARGE</Button>
      </ButtonGroup>

      <br />
      <br />

      <ButtonGroup size="medium" variant="contained" color={mode === "light" ? "secondary" : "primary"}>
        <Button>MEDIUM</Button>
        <Button>MEDIUM</Button>
        <Button>MEDIUM</Button>
      </ButtonGroup>

      <br />
      <br />

      <ButtonGroup size="small" variant="contained" color={mode === "light" ? "secondary" : "primary"}>
        <Button>SMALL</Button>
        <Button>SMALL</Button>
        <Button>SMALL</Button>
      </ButtonGroup>

      <br />
      <br />
      <ButtonGroup variant="contained" size="large" color={mode === "light" ? "secondary" : "primary"}>
        <Button>LARGE</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <br />
      <br />
      <ButtonGroup variant="contained" size="medium" color={mode === "light" ? "secondary" : "primary"}>
        <Button>MEDIUM</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <br />
      <br />
      <ButtonGroup variant="contained" size="small" color={mode === "light" ? "secondary" : "primary"}>
        <Button>SMALL</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <br />
      <br />
      <ButtonGroup variant="outlined" size="large" color={mode === "light" ? "secondary" : "primary"}>
        <Button>LARGE</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <br />
      <br />
      <ButtonGroup variant="outlined" size="medium" color={mode === "light" ? "secondary" : "primary"}>
        <Button>MEDIUM</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>

      <br />
      <br />
      <ButtonGroup variant="outlined" size="small" color={mode === "light" ? "secondary" : "primary"}>
        <Button>SMALL</Button>
        <Button size="small">
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
    </>
  )
}

export default ButtonGroups

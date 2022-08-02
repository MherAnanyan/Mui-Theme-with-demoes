import { Button } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { grey } from '@mui/material/colors';

const Buttons = () => {
  return (
    <>
      <br />
      <br />
      <Button variant="contained" style={{ margin: "10px" }}>
        Contained
      </Button>
      <Button variant="contained" disabled style={{ margin: "10px" }}>
        Disabled
      </Button>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        style={{ margin: "10px" }}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        disabled
        startIcon={<ArrowBackIcon />}
        style={{ margin: "10px" }}
      >
        Disabled
      </Button>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        style={{ margin: "10px" }}
      >
        Contained
      </Button>
      <Button
        variant="contained"
        disabled
        endIcon={<ArrowForwardIcon />}
        style={{ margin: "10px" }}
      >
        Disabled
      </Button>

      <br />
      <br />
      <Button variant="outlined" style={{ margin: "10px" }}>
        Contained
      </Button>
      <Button variant="outlined" disabled style={{ margin: "10px" }}>
        Disabled
      </Button>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        style={{ margin: "10px" }}
      >
        Contained
      </Button>
      <Button
        variant="outlined"
        disabled
        startIcon={<ArrowBackIcon />}
        style={{ margin: "10px" }}
      >
        Disabled
      </Button>
      <Button
        variant="outlined"
        endIcon={<ArrowForwardIcon />}
        style={{ margin: "10px" }}
      >
        Contained
      </Button>
      <Button
        variant="outlined"
        disabled
        endIcon={<ArrowForwardIcon />}
        style={{ margin: "10px" }}
      >
        Disabled
      </Button>

      <br />
      <br />
      <Button variant="text" style={{ margin: "10px" }}>
        Contained
      </Button>
      <Button variant="text" disabled style={{ margin: "10px" }}>
        Disabled
      </Button>
      <Button
        variant="text"
        startIcon={<ArrowBackIcon />}
        style={{ margin: "10px" }}
      >
        Contained
      </Button>
      <Button
        variant="text"
        disabled
        startIcon={<ArrowBackIcon />}
        style={{ margin: "10px" }}
      >
        Disabled
      </Button>
      <Button
        variant="text"
        endIcon={<ArrowForwardIcon />}
        style={{ margin: "10px" }}
      >
        Contained
      </Button>
      <Button
        variant="text"
        disabled
        endIcon={<ArrowForwardIcon />}
        style={{ margin: "10px" }}
      >
        Disabled
      </Button>

      <br />
      <br />
      <Button variant="contained" color="primary" style={{ margin: "10px" }}>
        PIMARY
      </Button>
      <Button variant="contained" color="secondary" style={{ margin: "10px" }}>
        SECONDARY
      </Button>
      <Button variant="contained" color="error" style={{ margin: "10px" }}>
        ERROR
      </Button>
      <Button variant="contained" color="warning" style={{ margin: "10px" }}>
        WARNING
      </Button>
      <Button variant="contained" color="info" style={{ margin: "10px" }}>
        INFO
      </Button>
      <Button variant="contained" color="success" style={{ margin: "10px" }}>
        SUCCESS
      </Button>
      <Button variant="contained" color="myinherit" style={{ margin: "10px" }}>
        INHERIT
      </Button>

      <br />
      <br />
      <Button variant="outlined" color="primary" style={{ margin: "10px" }}>
        PIMARY
      </Button>
      <Button variant="outlined" color="secondary" style={{ margin: "10px" }}>
        SECONDARY
      </Button>
      <Button variant="outlined" color="error" style={{ margin: "10px" }}>
        ERROR
      </Button>
      <Button variant="outlined" color="warning" style={{ margin: "10px" }}>
        WARNING
      </Button>
      <Button variant="outlined" color="info" style={{ margin: "10px" }}>
        INFO
      </Button>
      <Button variant="outlined" color="success" style={{ margin: "10px" }}>
        SUCCESS
      </Button>
      <Button variant="outlined" color="myinherit" style={{ margin: "10px" }}>
        INHERIT
      </Button>

      <br />
      <br />
      <Button variant="text" color="primary" style={{ margin: "10px" }}>
        PIMARY
      </Button>
      <Button variant="text" color="secondary" style={{ margin: "10px" }}>
        SECONDARY
      </Button>
      <Button variant="text" color="error" style={{ margin: "10px" }}>
        ERROR
      </Button>
      <Button variant="text" color="warning" style={{ margin: "10px" }}>
        WARNING
      </Button>
      <Button variant="text" color="info" style={{ margin: "10px" }}>
        INFO
      </Button>
      <Button variant="text" color="success" style={{ margin: "10px" }}>
        SUCCESS
      </Button>
      <Button variant="text" color="myinherit" style={{ margin: "10px" }}>
        INHERIT
      </Button>

      <br />
      <br />
      <Button variant="contained" size="large" style={{ margin: "10px" }}>
        Large
      </Button>
      <Button variant="contained" size="medium" style={{ margin: "10px" }}>
        Medium
      </Button>
      <Button variant="contained" size="small" style={{ margin: "10px" }}>
        Small
      </Button>

      <br />
      <br />
      <Button variant="outlined" size="large" style={{ margin: "10px" }}>
        Large
      </Button>
      <Button variant="outlined" size="medium" style={{ margin: "10px" }}>
        Medium
      </Button>
      <Button variant="outlined" size="small" style={{ margin: "10px" }}>
        Small
      </Button>

      <br />
      <br />
      <Button variant="text" size="large" style={{ margin: "10px" }}>
        Large
      </Button>
      <Button variant="text" size="medium" style={{ margin: "10px" }}>
        Medium
      </Button>
      <Button variant="text" size="small" style={{ margin: "10px" }}>
        Small
      </Button>
    </>
  )
}

export default Buttons

import StarIcon from "@mui/icons-material/Star"
import { IconButton } from "@mui/material"

const IconButtons = ({ mode }) => {
  return (
    <>
      <br />
      <br />

      <IconButton color={mode === "light" ? "secondary" : "primary"}>
        <StarIcon />
      </IconButton>

      <IconButton color={mode === "light" ? "secondary" : "primary"} disabled>
        <StarIcon />
      </IconButton>

      <br />
      <br />

      <IconButton
        size="large"
        color={mode === "light" ? "secondary" : "primary"}
      >
        <StarIcon fontSize="inherit"/>
      </IconButton>
      <IconButton
        size="medium"
        color={mode === "light" ? "secondary" : "primary"}
      >
        <StarIcon ontSize="inherit" />
      </IconButton>
      <IconButton
      size="small"
        color={mode === "light" ? "secondary" : "primary"}
      >
        <StarIcon fontSize="inherit"/>
      </IconButton>

      <br />
      <br />

      <IconButton
        color="primary"
      >
        <StarIcon/>
      </IconButton>

      <IconButton
        color="secondary"
      >
        <StarIcon/>
      </IconButton>

      <IconButton
        color="error"
      >
        <StarIcon/>
      </IconButton>

      <IconButton
        color="warning"
      >
        <StarIcon/>
      </IconButton>

      <IconButton
        color="info"
      >
        <StarIcon/>
      </IconButton>

      <IconButton
        color="success"
      >
        <StarIcon/>
      </IconButton>

      <IconButton
        color="myinherit"
      >
        <StarIcon/>
      </IconButton>
    </>
  )
}

export default IconButtons

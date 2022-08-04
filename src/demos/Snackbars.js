import Button from "@mui/material/Button"
import Snackbar from "@mui/material/Snackbar"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import { Wrapper } from "../Wrapper"
import { useState } from "react"

export const Snackbars = () => {
  const [data, setIsOpen] = useState({ isOpen: false })
  const open = (type) => () => setIsOpen({ isOpen: true, type })
  const close = () => setIsOpen({ isOpen: false })

  const succesColor = { color: "#65B363" }
  const containerColor = {
    sx: {
      background: "#313131",
      color: "#fff",
      maxWidth: 200
    },
  }

  return (
    // TODO
    <Wrapper title="Snackbar">
      <Button onClick={open("success")}>Snackbar 1</Button>
      <Button onClick={open()}>Snackbar 2</Button>
      <Snackbar
        ContentProps={containerColor}
        open={data.isOpen}
        onClose={close}
        message="Lorem ipsum dolor sit amet."
        action={
          data.type === "success" ? (
            <CheckCircleOutlineIcon sx={succesColor} />
          ) : (
            <IconButton sx={{color: "#fff"}} onClick={close}>
              <CloseIcon />
            </IconButton>
          )
        }
      />
    </Wrapper>
  )
}

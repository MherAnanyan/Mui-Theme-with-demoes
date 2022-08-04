import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import { useState } from "react"
import { Wrapper } from "../Wrapper"

export const Dialogs = () => {
  const closeIconSx = {
    position: "absolute",
    right: 8,
    top: 8,
  }
  const OkSx = { width: 120 }
  const BtnSx = { m: 1 }

  const [data, setData] = useState({ isOpen: false })

  const handleClickOpen = (size) => () => {
    setData({ isOpen: true, size })
  }

  const handleClose = () => {
    setData({ isOpen: false })
  }

  return (
    <Wrapper title="Dialog">
      <Button sx={BtnSx} variant="outlined" onClick={handleClickOpen("sm")}>
        Open small dialog
      </Button>
      <Button sx={BtnSx} variant="outlined" onClick={handleClickOpen("md")}>
        Open medium dialog
      </Button>
      <Button sx={BtnSx} variant="outlined" onClick={handleClickOpen("lg")}>
        Open large dialog
      </Button>
      <Button sx={BtnSx} variant="outlined" onClick={handleClickOpen("xl")}>
        Open big dialog
      </Button>
      <Dialog
        open={data.isOpen}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={data.size}
      >
        <DialogTitle>
          H6
          <IconButton sx={closeIconSx} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Content</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button sx={OkSx} variant="outlined" onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  )
}

import { Fab } from "@mui/material"
import AddIcon from '@material-ui/icons/Add';

const Fabs = () => {
  return <>
          <br />
          <br />
          <Fab variant="extended" color="primary" aria-label="add">
            <AddIcon />
            BUTTON
          </Fab>
          <Fab variant="extended" color="primary" aria-label="add" disabled style={{ margin: "10px" }}>
            <AddIcon />
            BUTTON
          </Fab>
          <br />
          <br />

          <Fab color="primary" aria-label="add" style={{ margin: "10px" }}>
            <AddIcon />
          </Fab>
          <Fab color="primary" disabled aria-label="add" style={{ margin: "10px" }}>
            <AddIcon />
          </Fab>

          <br />
          <br />
          <Fab variant="extended" aria-label="add" style={{ margin: "10px" }}>
            <AddIcon />
            DEFAULT
          </Fab>

          <Fab variant="extended" color="primary" aria-label="add" style={{ margin: "10px" }}>
            <AddIcon />
            BUTTON
          </Fab>
          <Fab variant="extended" color="secondary" aria-label="add" style={{ margin: "10px" }}>
            <AddIcon />
            BUTTON
          </Fab>

          <Fab variant="extended" color="myinherit" aria-label="add" style={{ margin: "10px" }}>
            <AddIcon />
            INHERIT
          </Fab>

          <br />
          <br />
          <Fab variant="extended" aria-label="add" size="large" style={{ margin: "10px" }}>
            <AddIcon />
            LARGE
          </Fab>
          <Fab variant="extended" aria-label="add" size="mediul" style={{ margin: "10px" }}>
            <AddIcon />
            MEDIUM
          </Fab>
          <Fab variant="extended" aria-label="add" size="small" style={{ margin: "10px" }}>
            <AddIcon />
            SMALL
          </Fab>
  </>

}

export default Fabs
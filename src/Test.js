//transform| Sentence=>none; All Cap=> textTransform: "uppercase"
// import { createTheme, Typography, ThemeProvider } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main
  },
}))

const App = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>jhfghjg</div>
      {/* <Typographys /> */}
    </>
  )
}

export default App

import { Alert, AlertTitle } from "@mui/material"
import { Wrapper } from "../Wrapper"

export const Alerts = () => {
  const sx = { m: 1, width: 320 }

  return (
    <Wrapper title="Alert">
      <Alert sx={sx} variant="standard" severity="error">
        Standard
      </Alert>
      <Alert sx={sx} variant="outlined" severity="error">
        Outlined
      </Alert>
      <Alert sx={sx} variant="filled" severity="error">
        Filled
      </Alert>
      <br />
      <Alert sx={sx} variant="filled" severity="error">
        <AlertTitle>Title</AlertTitle>
        Alert content
      </Alert>
      <Alert sx={sx} variant="filled" severity="error" onClose={() => {}}>
        <AlertTitle>Title</AlertTitle>
        Alert content
      </Alert>
      <br/>
      <Alert sx={sx} variant="filled" severity="error">
      Error
      </Alert>
      <Alert sx={sx} variant="filled" severity="warning">
      Warning
      </Alert>
      <Alert sx={sx} variant="filled" severity="info">
        Info
      </Alert>
      <Alert sx={sx} variant="filled" severity="success">
        Success
      </Alert>
    </Wrapper>
  )
}

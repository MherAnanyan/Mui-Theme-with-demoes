import { Grid } from "@mui/material"
import { Wrapper } from "../Wrapper"

const Div = ({ color, height }) => (
  <div
    style={{
      width: "100%",
      height: `${height}px`,
      backgroundColor: color,
    }}
  ></div>
)

export const Layout = () => {
  return (
    <Wrapper title="Layout">
      <Grid container>
        <Grid item xs={0} sm={12}>
          <Div color="gray" height={50} />
        </Grid>
        <Grid item xs={0} sm={12}>
          <Div color="#012169" height={80} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
          <Div color="#e1e1e1" height={500} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Div color="#c4ceff" height={500} />
        </Grid>
      </Grid>
    </Wrapper>
  )
}

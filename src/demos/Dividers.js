import { Chip, Divider } from "@mui/material"
import { Box } from "@mui/system"
import { Wrapper } from "../Wrapper"

export const Dividers = () => {
  const content = (
    <div style={{ marginBottom: 20, marginTop: 20 }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </div>
  )
  return (
    <Wrapper title="Divider">
      <Box sx={{ width: 400 }}>
        <Divider sx={{ width: 100 }}></Divider>
        <Divider
          sx={{ height: 100, width: "1px", mt: 2 }}
          orientation="vertical"
        ></Divider>
        {content}
        <Divider>CENTER</Divider>
        {content}
        <Divider textAlign="left">LEFT</Divider>
        {content}
        <Divider textAlign="right">RIGHT</Divider>
        {content}
        <Divider>
          <Chip label="Chip"></Chip>
        </Divider>
      </Box>
    </Wrapper>
  )
}

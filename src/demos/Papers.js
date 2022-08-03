import { Paper } from "@mui/material"
import { Box } from "@mui/system"
import { Wrapper } from "../Wrapper"

export const Papers = () => {
  const boxStyle = { width: 600, display: "flex", flexWrap: "wrap" }
  const size = { width: 72, height: 72 }

  const items = new Array(24).fill(0).map((_, i) => i + 1)
  return (
    <Wrapper title="Paper">
      <Box sx={boxStyle}>
        {items.map((elevation) => (
          <Box key={elevation} sx={{ ...size, mt: 2, flexBasis: "16%" }}>
            <Paper sx={size} key={elevation} elevation={elevation} />
          </Box>
        ))}
      </Box>
    </Wrapper>
  )
}

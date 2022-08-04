import {
  Box,
  CircularProgress,
  LinearProgress,
  Typography,
} from "@mui/material"
import { Wrapper } from "../Wrapper"

export const Progresses = () => {
  const size = { width: 200, m: 2, display: "inline-block" }
  return (
    <Wrapper title="Progress">
      <Box sx={size}>
        <LinearProgress variant="determinate" color="progress" value={50} />
      </Box>
      <Box sx={size}>
        <LinearProgress color="progress" />
      </Box>
      <Box sx={size}>
        <LinearProgress
          variant="buffer"
          color="progress"
          value={40}
          valueBuffer={80}
        />
      </Box>

      <br />
      <br />

      <Box sx={size}>
        <LinearProgress variant="determinate" color="progress" value={50} />
      </Box>
      <Box sx={size}>
        <LinearProgress variant="determinate" color="progress2" value={50} />
      </Box>
      <Box sx={size}>
        <LinearProgress variant="determinate" color="progress" value={50} />
      </Box>

      <br />
      <br />

      <Box sx={{ ...size, display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" color="progress" value={50} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="caption" color="text.secondary">
            75%
          </Typography>
        </Box>
      </Box>

      <br />
      <br />

      <Box sx={size}>
        <CircularProgress
          variant="determinate"
          color="progress"
          value={75}
        ></CircularProgress>
      </Box>
      <Box sx={size}>
        <CircularProgress
          variant="determinate"
          color="progress2"
          value={75}
        ></CircularProgress>
      </Box>

      <br />
      <br />

      <Box sx={size}>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            color="progress"
            value={75}
          ></CircularProgress>
          <Typography
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            variant="caption"
            color="text.secondary"
          >
            75%
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  )
}

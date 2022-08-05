import styled from "@emotion/styled"
import { Button, Tooltip, tooltipClasses } from "@mui/material"
import { Box } from "@mui/system"
import { Wrapper } from "../Wrapper"

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1F69FF",
    color: "#fff",
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#1F69FF",
  },
}))

export const Tooltips = () => {
  const sx = { mb: 2 }
  return (
    <Wrapper title="Tooltip">
      <Box sx={{ m: 2 }}>
        <StyledTooltip sx={sx} title="Add">
          <Button>Tooltip</Button>
        </StyledTooltip>

        <br />

        <StyledTooltip sx={sx} title="Add" placement="top" arrow>
          <Button>Arrow Up</Button>
        </StyledTooltip>

        <br />

        <StyledTooltip sx={sx} title="Add" placement="bottom" arrow>
          <Button>Arrow Down</Button>
        </StyledTooltip>

        <br />

        <StyledTooltip sx={sx} title="Add" placement="right" arrow>
          <Button>Arrow Right</Button>
        </StyledTooltip>

        <br />

        <StyledTooltip sx={sx} title="Add" placement="left" arrow>
          <Button>Arrow Left</Button>
        </StyledTooltip>

        <br />
      </Box>
    </Wrapper>
  )
}

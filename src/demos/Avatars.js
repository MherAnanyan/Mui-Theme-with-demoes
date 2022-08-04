import { Avatar, Badge, Box } from "@mui/material"
import { Wrapper } from "../Wrapper"

export const Avatars = () => {
  const boxSx = { m: 5, display: "inline-block" }
  const sx = {
    width: 40,
    height: 40,
    backgroundColor: "avatar.main",
    color: "avatar.text",
  }

  return (
    <Wrapper title="Avatar">
      <Box sx={boxSx}>
        <Avatar sx={sx}>OP</Avatar>
      </Box>
      <Box sx={boxSx}>
        <Avatar sx={sx} variant="rounded">
          OP
        </Avatar>
      </Box>
      <Box sx={boxSx}>
        <Avatar sx={sx} variant="square">
          OP
        </Avatar>
      </Box>

      <br />
      <br />

      <Box sx={boxSx}>
        <Avatar sx={sx}>OP</Avatar>
      </Box>
      <Box sx={boxSx}>
        <Avatar sx={sx}></Avatar>
      </Box>
      <Box sx={boxSx}>
        <Avatar sx={sx} src="/avatar.png">
          OP
        </Avatar>
      </Box>

      <br />
      <br />

      <Box sx={boxSx}>
        <Badge
          overlap="circular"
          color="success"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          badgeContent=""
        >
          <Avatar sx={sx}>OP</Avatar>
        </Badge>
      </Box>
    </Wrapper>
  )
}

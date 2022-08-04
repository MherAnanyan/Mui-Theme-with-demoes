import { Badge } from "@mui/material"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import { Wrapper } from "../Wrapper"

export const Badges = () => {
  const sx = { m: 2, mr: 8 }

  return (
    <Wrapper title="Badge">
      <Badge sx={sx} color="primary" badgeContent=""></Badge>
      <Badge sx={sx} color="primary" variant="dot"></Badge>
      <br />
      <br />
      <Badge sx={sx} color="primary" badgeContent=""></Badge>
      <br />
      <br />
      <Badge sx={sx} color="secondary" badgeContent=""></Badge>
      <br />
      <br />
      <Badge sx={sx} color="error" badgeContent=""></Badge>
      <br />
      <br />
      <Badge sx={sx} color="warning" badgeContent=""></Badge>
      <br />
      <br />
      <Badge sx={sx} color="info" badgeContent=""></Badge>
      <br />
      <br />
      <Badge sx={sx} color="success" badgeContent=""></Badge>
      <br />
      <br />
      <Badge sx={sx} color="primary" badgeContent=""><MailOutlineIcon/></Badge>
      <Badge sx={sx} color="primary" variant="dot"><MailOutlineIcon/></Badge>
    </Wrapper>
  )
}

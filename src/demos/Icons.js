import { Box } from "@mui/system"
import StarIcon from "@mui/icons-material/Star"
import { Wrapper } from "../Wrapper"

export const Icons = () => {
  const boxSx = { display: "flex", gap: 6 }
  return (
    <Wrapper title="Icons">
      <Box sx={boxSx}>
        <StarIcon color="icon" fontSize="large" />
        <StarIcon color="icon" />
        <StarIcon color="icon" fontSize="small" />
        <StarIcon color="icon" fontSize="inherit" />
      </Box>
    </Wrapper>
  )
}

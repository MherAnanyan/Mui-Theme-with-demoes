import { Box, Skeleton } from "@mui/material"
import { Wrapper } from "../Wrapper"

export const Skeletons = () => {
  const sx = { m: 3 }

  return (
    <Wrapper title="Skeleton">
      <Box sx={{ display: "flex" }}>
        <Skeleton sx={sx} width={190} height={20} animation="wave" />

        <Skeleton
          sx={sx}
          animation="wave"
          variant="circular"
          width={40}
          height={40}
        />

        <Skeleton
          sx={sx}
          width={190}
          height={190}
          animation="wave"
          variant="rectangular"
        />
      </Box>
    </Wrapper>
  )
}

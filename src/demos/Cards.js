import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import IconButton from "@mui/material/IconButton"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import { Box } from "@mui/system"
import { Wrapper } from "../Wrapper"

export const Cards = () => {
  const size = { width: 500, height: 120 }
  const width = { width: 500 }
  return (
    <Wrapper title="Card">
      <Card sx={size}></Card>

      <br />
      <br />

      <Card sx={size}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card header
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Body
          </Typography>
        </CardContent>
      </Card>

      <br />
      <br />

      <Card sx={width}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card header
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subheader
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Body
          </Typography>
        </CardContent>
      </Card>

      <br />
      <br />

      <Card sx={width}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card header
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Subheader
          </Typography>
          <br />
          <Typography variant="body2" color="text.secondary">
            Body
          </Typography>
        </CardContent>
        <CardActions dir="rtl">
          <Button size="small">Action</Button>
          <Button size="small">Action</Button>
        </CardActions>
      </Card>

      <br />
      <br />

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image="/testImage.png" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography
            sx={{ pt: 3, pr: 3, fontSize: 16, letterSpacing: 0.8 }}
            variant="body2"
            color="text.secondary"
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>

      <br />
      <br />

      <Card sx={{ display: "flex", width: 362, height: 160 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Live From Space
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
          </CardContent>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              <SkipPreviousIcon />
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              <SkipNextIcon />
            </IconButton>
          </Box>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151, pb: 3 }}
          image="/testImage.png"
        />
      </Card>
    </Wrapper>
  )
}

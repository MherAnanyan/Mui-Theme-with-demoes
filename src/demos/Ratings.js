import { Typography } from "@mui/material"
import Rating from "@mui/material/Rating"

const Ratings = () => {
  return (
    <>
      <br />
      <br />
      <Typography color="text.primary" style={{display: 'inline', marginRight:"200px"}}>Default</Typography>
      <Rating name="disabled" defaultValue={2.5} precision={0.5} value={"value"} />
      <br />
      <br />
      <Typography color="text.primary" style={{display: 'inline', marginRight:"200px"}}>Default</Typography>
      <Rating name="disabled" defaultValue={2.5} precision={0.5} value={"value"} disabled />
      <br />
      <br />
      <Typography color="text.primary" style={{display: 'inline', marginRight:"200px"}}>Small</Typography>
      <Rating name="size-small" defaultValue={2.5} precision={0.5} size="small" />
      <br />
      <br />
      <Typography color="text.primary" style={{display: 'inline', marginRight:"200px"}}>Medium</Typography>
      <Rating name="size-medium" defaultValue={2.5} precision={0.5} />
      <br />
      <br />
      <Typography color="text.primary" style={{display: 'inline', marginRight:"200px"}}>Large</Typography>
      <Rating name="size-large" defaultValue={2.5} precision={0.5} size="large" />

    </>
  )
}

export default Ratings

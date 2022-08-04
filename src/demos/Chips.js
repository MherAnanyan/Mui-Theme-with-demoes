import { Avatar, Box, Chip } from "@mui/material"
import { Wrapper } from "../Wrapper"

export const Chips = () => {
  const boxSx = { display: "flex", gap: 4, mb: 3 }
  return (
    <Wrapper title="Chip">
      <Box sx={boxSx}>
        <Chip label="Enabled" onClick={() => {}} />
        <Chip label="Hovered" onClick={() => {}} />
        <Chip label="Focused" onClick={() => {}} />
        <Chip label="Disabled" disabled />
      </Box>
      <Box sx={boxSx}>
        <Chip label="Filled" onClick={() => {}} />
        <Chip label="Outlined" variant="outlined" onClick={() => {}} />
      </Box>
      <Box sx={boxSx}>
        <Chip label="Medium" onClick={() => {}} />
        <Chip label="Small" size="small" onClick={() => {}} />
      </Box>
      <Box sx={boxSx}>
        <Chip label="Default" onClick={() => {}} />
        <Chip label="Primary" color="primary" onClick={() => {}} />
        <Chip label="Secondary" color="secondary" onClick={() => {}} />
        <Chip label="Error" color="error" onClick={() => {}} />
        <Chip label="Warning" color="warning" onClick={() => {}} />
        <Chip label="Info" color="info" onClick={() => {}} />
        <Chip label="Succes" color="success" onClick={() => {}} />
      </Box>
      <Box sx={boxSx}>
        <Chip label="Chip" onClick={() => {}} onDelete={() => {}} />
      </Box>
      <Box sx={boxSx}>
        <Chip label="Chip" onClick={() => {}} avatar={<Avatar>F</Avatar>} />
        <Chip
          label="Chip"
          onClick={() => {}}
          onDelete={() => {}}
          avatar={<Avatar>F</Avatar>}
        />
      </Box>
    </Wrapper>
  )
}

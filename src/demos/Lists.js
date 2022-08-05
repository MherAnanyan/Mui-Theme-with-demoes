import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import StarIcon from "@mui/icons-material/Star"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import { Wrapper } from "../Wrapper"

export const Lists = () => {
  return (
    <Wrapper title="List">
      <Box sx={{ width: 300 }}>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Enabled" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Hovered" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemText primary="Selected" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton disabled>
            <ListItemText primary="Disabled" />
          </ListItemButton>
        </ListItem>

        <br />
        <br />

        <ListItem>
          <ListItemButton>
            <ListItemText primary="Medium" />
          </ListItemButton>
        </ListItem>
        <ListItem dense>
          <ListItemButton>
            <ListItemText primary="Dense" />
          </ListItemButton>
        </ListItem>

        <br />

        <ListItem>
          <ListItemButton>
            <ListItemText primary="Medium" secondary="Secondary" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemText primary="Medium" />
            <ListItemIcon>
              <StarIcon color="icon" />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemText primary="Divider" />
          </ListItemButton>
        </ListItem>
        <Divider></Divider>

        <br />
        <br />

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>

        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Wrapper>
  )
}

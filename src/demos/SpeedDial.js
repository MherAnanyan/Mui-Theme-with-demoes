import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { Wrapper } from '../Wrapper';

const actions = [
  {
    icon: <SpeedDialIcon fontSize="small" />,
    name: 'Tooltip',
  },
  { icon: <SpeedDialIcon color="secondary.main" />, name: 'Tooltip' },
  { icon: <SpeedDialIcon />, name: 'Tooltip' },
  { icon: <SpeedDialIcon />, name: 'Tooltip' },
];

export const PlaygroundSpeedDial = () => {
  return (
    <Wrapper title="Speed Dial">
      <div style={{ display: 'flex', gap: 40 }}>
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
          <Box
            sx={{
              position: 'relative',
              mt: 3,
              height: 320,
              background: 'secondary',
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial playground example"
              // FabProps={{ color: 'secondary' }}
              icon={<SpeedDialIcon />}
              direction="down"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>

        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
          <Box
            sx={{
              position: 'relative',
              mt: 3,
              height: 320,
              background: 'secondary',
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial playground example"
              hidden={false}
              // FabProps={{ color: 'secondary' }}
              icon={<SpeedDialIcon />}
              direction="left"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
          <Box
            sx={{
              position: 'relative',
              mt: 3,
              height: 320,
              background: 'secondary',
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial playground example"
              hidden={false}
              // FabProps={{ color: 'secondary' }}
              icon={<SpeedDialIcon />}
              direction="right"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
          <Box
            sx={{
              position: 'relative',
              mt: 3,
              height: 320,
              background: 'secondary',
            }}
          >
            <SpeedDial
              ariaLabel="SpeedDial playground example"
              hidden={false}
              FabProps={{ background: 'text' }}
              icon={<SpeedDialIcon />}
              direction="up"
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  tooltipOpen
                />
              ))}
            </SpeedDial>
          </Box>
        </Box>
      </div>
    </Wrapper>
  );
};

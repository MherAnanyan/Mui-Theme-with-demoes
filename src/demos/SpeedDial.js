import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Wrapper } from '../Wrapper';

const actions = [
  {
    icon: <SpeedDialIcon fontSize="small" />,
    name: 'Tooltip',
  },
  {
    icon: <SpeedDialIcon color="secondary.main" />,
    name: 'Tooltip 1',
  },
  { icon: <SpeedDialIcon />, name: 'Tooltip 2' },
  { icon: <SpeedDialIcon />, name: 'Tooltip 3' },
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

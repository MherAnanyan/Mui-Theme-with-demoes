import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Wrapper } from '../Wrapper';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const MuiTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    indicator: {
      backgroundColor: '#fff',
    },
  }));
  const classes = useStyles();

  const FilledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
      //   textTransform: 'none',
      //   fontWeight: theme.typography.fontWeightRegular,
      //   fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: theme.palette.tabText.main,
      opacity: 0.7,
      '&.Mui-selected': {
        color: theme.palette.tabText.main,
        opacity: 1,
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    })
  );

  const EmptyBgTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
      //   textTransform: 'none',
      //   fontWeight: theme.typography.fontWeightRegular,
      //   fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      color: theme.palette.tabText.secondary,
      opacity: 0.7,
      '&.Mui-selected': {
        color: theme.palette.tabText.secondary,
        opacity: 1,
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
      },
    })
  );

  return (
    <Wrapper title="Tabs">
      <br />
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ bgcolor: 'primary2.main' }}
            classes={{ indicator: classes.indicator }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'tabText.indicator',
              },
            }}
          >
            <FilledTab label="TAB" {...a11yProps(0)} />
            <FilledTab label="TAB" {...a11yProps(1)} />
            <FilledTab label="TAB" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
      <br />
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ bgcolor: 'primary2.main' }}
            classes={{ indicator: classes.indicator }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'tabText.indicator',
              },
            }}
          >
            <FilledTab
              label="TAB"
              icon={<NotificationsIcon />}
              {...a11yProps(0)}
            />
            <FilledTab
              label="TAB"
              icon={<NotificationsIcon />}
              {...a11yProps(1)}
            />
            <FilledTab
              label="TAB"
              icon={<NotificationsIcon />}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Box>
      <br />
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ bgcolor: 'primary2.main' }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'tabText.indicator',
              },
            }}
          >
            <FilledTab
              icon={<NotificationsIcon />}
              {...a11yProps(0)}
            />
            <FilledTab
              icon={<NotificationsIcon />}
              {...a11yProps(1)}
            />
            <FilledTab
              icon={<NotificationsIcon />}
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Box>
      <br />
      <Box sx={{ width: '30%' }}>
        <Box>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{ bgcolor: 'primary2.main' }}
            classes={{ indicator: classes.indicator }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'tabText.indicator',
              },
            }}
          >
            <FilledTab label="TAB" {...a11yProps(0)} />
            <FilledTab label="TAB" {...a11yProps(1)} />
            <FilledTab label="TAB" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
      <br />
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'tabText.secondary',
              },
            }}
          >
            <EmptyBgTab label="TAB" {...a11yProps(0)} />
            <EmptyBgTab label="TAB" {...a11yProps(1)} />
            <EmptyBgTab label="TAB" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
      <br />
      <Box sx={{ width: '100%' }}>
        <Box>
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            scrollButtons
            aria-label="basic tabs example"
            sx={{ bgcolor: 'primary2.main' }}
            classes={{ indicator: classes.indicator }}
            TabIndicatorProps={{
              sx: {
                backgroundColor: 'tabText.indicator',
              },
            }}
          >
            <FilledTab label="TAB" {...a11yProps(0)} />
            <FilledTab label="TAB" {...a11yProps(1)} />
            <FilledTab label="TAB" {...a11yProps(2)} />
            <FilledTab label="TAB" {...a11yProps(3)} />
            <FilledTab label="TAB" {...a11yProps(4)} />
            <FilledTab label="TAB" {...a11yProps(0)} />
            <FilledTab label="TAB" {...a11yProps(1)} />
            <FilledTab label="TAB" {...a11yProps(2)} />
            <FilledTab label="TAB" {...a11yProps(3)} />
            <FilledTab label="TAB" {...a11yProps(4)} />
          </Tabs>
        </Box>
      </Box>
      <br />
    </Wrapper>
  );
};

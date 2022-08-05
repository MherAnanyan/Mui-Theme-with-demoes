import { useState } from 'react';
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { Switch } from '@material-ui/core';
import { lightPalette, darkPalette } from './palettes';
import Typographys from './demos/Typographys.js';
import Buttons from './demos/Buttons';
import { MuiCheckbox } from './demos/Checkbox';
import Fabs from './demos/Fabs';
import Radios from './demos/Radios';
import Ratings from './demos/Ratings';
import Sliders from './demos/Sliders';
import Switches from './demos/Switches';
import { TransferListFirst } from './demos/transferLists/TransferList1';
import { TransferListSecond } from './demos/transferLists/TransferList2';
import IconButtons from './demos/IconButtons';
import ToggleButtons from './demos/ToggleButtons';
import InputElements from './demos/InputElements';
import ButtonGroups from './demos/ButtonGroups';
import { MuiBreadcrumbs } from './demos/Breadcrumbs';
import TemporaryDrawer from './demos/MuiDrower';
import { Selects } from './demos/Selects';
import { TextFields } from './demos/TextFields';
import { BottomNav } from './demos/BottomNav';
import { Links } from './demos/Link';
import { Menus } from './demos/Menus/Menus';
import { Paginations } from './demos/Pagination';
import { PlaygroundSpeedDial } from './demos/SpeedDial';
import { Accordions } from './demos/Accardions';
import { Autocompletes } from './demos/Autocomplete';
import { Multilines } from './demos/Multilines';
import { Steppers } from './demos/Steppers';
import { Alerts } from './demos/Alerts';
import { Skeletons } from './demos/Skeletons';
import { Dialogs } from './demos/Dialogs';
import { Cards } from './demos/Cards';
import { Papers } from './demos/Papers';
import { Progresses } from './demos/Progresses';
import { Snackbars } from './demos/Snackbars';
import { Avatars } from './demos/Avatars';
import { Badges } from './demos/Badges';
import { Chips } from './demos/Chips';
import { Dividers } from './demos/Dividers';
import { Icons } from './demos/Icons';
import { MuiTabs } from './demos/MuiTabs';

const regular = 400,
  medium = 500,
  semiBold = 600,
  bold = 700;

const App = () => {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
    typography: {
      h1: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '55px',
        letterSpacing: '0px',
        lineHeight: '60px',
        display: 'block',
      },
      h2: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '33px',
        letterSpacing: '0.48px',
        lineHeight: '43px',
        display: 'block',
      },
      h3: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '28px',
        letterSpacing: '0.64px',
        lineHeight: '34px',
        display: 'block',
      },
      h4: {
        fontFamily: 'Arial',
        fontWeight: semiBold,
        fontSize: '26px',
        letterSpacing: '0.32px',
        lineHeight: '31px',
        display: 'block',
      },
      h5: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '23px',
        letterSpacing: '0.32px',
        lineHeight: '30px',
        display: 'block',
      },
      h6: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '19px',
        letterSpacing: '1px',
        lineHeight: '32px',
        display: 'block',
      },
      h7: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '14px',
        letterSpacing: '0.5px',
        lineHeight: '18px',
        display: 'block',
      },
      h8: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '15px',
        textTransform: 'uppercase',
        letterSpacing: '0.32px',
        lineHeight: '24px',
        display: 'block',
      },
      h9: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '12px',
        letterSpacing: '0.32px',
        lineHeight: '15px',
        display: 'block',
      },
      subtitle1: {
        fontFamily: 'Arial',
        fontWeight: bold,
        fontSize: '22px',
        letterSpacing: '0.15px',
        lineHeight: '32px',
        display: 'block',
      },
      subtitle2: {
        fontFamily: 'Arial',
        fontWeight: bold,
        fontSize: '16px',
        letterSpacing: '0.1px',
        lineHeight: '24px',
        display: 'block',
      },
      body1: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '15px',
        letterSpacing: '0.8px',
        lineHeight: '24px',
        display: 'block',
      },
      body1caps: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '15px',
        letterSpacing: '0.8px',
        lineHeight: '24px',
        display: 'block',
        textTransform: 'uppercase',
      },
      body2: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '13px',
        letterSpacing: '0.32px',
        lineHeight: '20px',
        display: 'block',
      },
      body3: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '10px',
        letterSpacing: '0.8px',
        lineHeight: '12px',
        display: 'block',
      },
      buttonLarge: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '15px',
        letterSpacing: '20%',
        lineHeight: '19px',
        display: 'block',
        textTransform: 'uppercase',
      },
      buttonMedium: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '13px',
        letterSpacing: '20%',
        lineHeight: '17px',
        display: 'block',
        textTransform: 'uppercase',
      },
      buttonSmall: {
        fontFamily: 'Arial',
        fontWeight: medium,
        fontSize: '12px',
        letterSpacing: '20%',
        lineHeight: '15px',
        display: 'block',
        textTransform: 'uppercase',
      },
      captionBold: {
        fontFamily: 'Arial',
        fontWeight: bold,
        fontSize: '12px',
        letterSpacing: '0.4px',
        display: 'block',
      },
      caption: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '12px',
        letterSpacing: '0.4px',
        display: 'block',
      },
      overline: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '14px',
        letterSpacing: '3px',
        display: 'block',
        textTransform: 'uppercase',
      },
      avatarLetter: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '20px',
        letterSpacing: '0.14px',
        display: 'block',
      },
      inputLabel: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '12px',
        letterSpacing: '0.15px',
        display: 'block',
      },
      helperText: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '12px',
        letterSpacing: '0.4px',
        display: 'block',
      },
      inputText: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '16px',
        letterSpacing: '0.15px',
        display: 'block',
      },
      tooltip: {
        fontFamily: 'Arial',
        fontWeight: regular,
        fontSize: '10px',
        letterSpacing: '0px',
        display: 'block',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <div style={{ position: 'fixed', top: 0, zIndex: 1000 }}>
            <Switch
              onChange={() =>
                setMode(mode === 'light' ? 'dark' : 'light')
              }
            />
          </div>
          <CssBaseline />
          <Typographys />
          <Buttons />
          <ButtonGroups />
          <IconButtons />
          <ToggleButtons />
          <Switches />
          <Sliders />
          <Ratings />
          <Radios />
          <InputElements />
          <Fabs />
          <MuiCheckbox />
          <TransferListFirst />
          <TransferListSecond />
          <Selects />
          <MuiBreadcrumbs />
          <TemporaryDrawer />
          <TextFields />
          <BottomNav />
          <Links />
          <Menus />
          <Paginations />
          <PlaygroundSpeedDial />
          <Accordions />
          <Multilines />
          <Autocompletes />
          <Steppers />
          <Snackbars />
          <Skeletons />
          <Progresses />
          <Papers />
          <Dialogs />
          <Cards />
          <Alerts />
          <Avatars />
          <Badges />
          <Chips />
          <Icons />
          <Dividers />
          <MuiTabs />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;

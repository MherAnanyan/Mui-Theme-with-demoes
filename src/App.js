//transform| Sentence=>none; All Cap=> textTransform: "uppercase"
import Test from './Test';
import {
  createTheme,
  ThemeProvider,
  Typography,
  Button,
  IconButton,
  CssBaseline,
} from '@mui/material';
import Typographys from './demos/Typographys.js';
import Buttons from './demos/Buttons';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';
import { lightPalette, darkPalette } from './palettes';
import CheckBoxes from './demos/CheckBoxes';
import Fabs from './demos/Fabs';
import Radios from './demos/Radios';
import Ratings from './demos/Ratings';
import Sliders from './demos/Sliders';
import Switches from './demos/Switches';
import TransferLists1 from './demos/transferLists/TransferList1';
import TransferLists2 from './demos/transferLists/TransferList2';
import IconButtons from './demos/IconButtons';
import ToggleButtons from './demos/ToggleButtons';
import InputElements from './demos/InputElements';
import { CheckBox } from '@material-ui/icons';
import ButtonGroups from './demos/ButtonGroups';
import Select from './demos/Select';
import { MuiBreadcrumbs } from './demos/Breadcrumbs';
import TemporaryDrawer from './demos/MuiDrower';

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
        <div
        // style={{
        //   backgroundColor: theme.palette.background.default,
        // }}
        >
          <button
            onClick={() =>
              setMode(mode === 'light' ? 'dark' : 'light')
            }
          >
            {mode} mode
          </button>
          <CssBaseline />

          {/* <Typographys />
          <Buttons />
          <ButtonGroups />
          <ToggleButtons />
          <Switches />
          <Sliders />
          <Ratings />
          <Radios />
          <InputElements />
          <IconButtons />
          <Fabs />
          <CheckBoxes />
          <TransferLists1 />
          <TransferLists2 />
          <Select />
          <MuiBreadcrumbs /> */}
          <TemporaryDrawer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;

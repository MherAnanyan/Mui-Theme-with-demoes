import { grey } from '@mui/material/colors';

export const lightPalette = {
  mode: 'light',
  background: {
    default: '#ffffff',
  },
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    primaryShades: [
      'rgba(0, 0, 0, 0.04)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.3)',
      'radial-gradient(36.59% 100.8% at 50% 50%, rgba(0, 0, 0, 0.3) 99.54%, rgba(255, 255, 255, 0) 100%)',
    ],
    secondaryShades: [
      'rgba(0, 0, 0, 0.04)',
      'rgba(0, 0, 0, 0.18)',
      'radial-gradient(36.59% 100.8% at 50% 50%, rgba(0, 0, 0, 0.18) 99.54%, rgba(255, 255, 255, 0) 100%)',
    ],
  },
  primary: {
    main: '#1F69FF',
    dark: '#0040CB',
    light: '#7196FF',
    contrast: '#FFFFFF',
  },
  secondary: {
    main: '#012169',
    dark: '#00003E',
    light: '#414898',
    contrast: '#FFFFFF',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
    disabled: 'rgba(0, 0, 0, 0.55)',
    disabledBackground: 'rgba(0, 0, 0, 0.05)',
    focus: 'rgba(0, 0, 0, 0.12)',
  },
  error: {
    main: '#D50000',
    dark: '#9B0000',
    light: '#FF5131',
    contrast: '#FFFFFF',
  },
  warning: {
    main: '#FF7A00',
    dark: '#C54B00',
    light: '#FFAB42',
    contrast: '#FFFFFF',
  },
  info: {
    main: '#1F69FF',
    dark: '#0040CB',
    light: '#7196FF',
    contrast: '#FFFFFF',
  },
  success: {
    main: '#348337',
    dark: '#00550B',
    light: '#65B363',
    contrast: '#FFFFFF',
  },
  background: {
    default: '#FAFAFA',
    paper: '#FFFFFF',
  },
  other: {
    divider: 'rgba(0, 0, 0, 0.12)',
    outlinedBorder: 'rgba(0, 0, 0, 0.23)',
    backdropOverlay: 'rgba(0, 0, 0, 0.5)',
    filledInputBackground: 'rgba(0, 0, 0, 0.06)',
    standardInputLine: 'rgba(0, 0, 0, 0.42)',
    snackBar: '#323232',
    ratingActiv: '#FFB400',
  },
  myinherit: {
    main: grey[400],
  },
  primary2: {
    main: '#012169',
    dark: '#00003E',
    light: '#414898',
    contrastText: '#FFFFFF',
  },
};

export const darkPalette = {
  mode: 'dark',
  background: {
    default: '#000000',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    primaryShades: [
      'rgba(0, 0, 0, 0.04)',
      'rgba(255, 255, 255, 0.12)',
      'rgba(255, 255, 255, 0.3)',
      'radial-gradient(36.59% 100.8% at 50% 50%, rgba(255, 255, 255, 0.3) 99.54%, rgba(255, 255, 255, 0) 100%)',
    ],
    secondaryShades: [
      'rgba(255, 255, 255, 0.04)',
      'rgba(255, 255, 255, 0.18)',
      'radial-gradient(36.59% 100.8% at 50% 50%, rgba(255, 255, 255, 0.18) 99.54%, rgba(255, 255, 255, 0) 100%)',
    ],
  },
  primary: {
    main: '#54A5ED',
    dark: '#0077BA',
    light: '#8CD6FF',
    contrast: 'rgba(0, 0, 0, 0.87)',
  },
  secondary: {
    main: '#72869E',
    dark: '#455970',
    light: '#A1B6CF',
    contrast: 'rgba(0, 0, 0, 0.87)',
  },
  action: {
    active: 'rgba(255, 255, 255, 0.56)',
    hover: 'rgba(255, 255, 255, 0.08)',
    selected: 'rgba(255, 255, 255, 0.16)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
  },
  error: {
    main: '#D50000',
    dark: '#9B0000',
    light: '#FF5131',
    contrast: '#FFFFFF',
  },
  warning: {
    main: '#FF7A00',
    dark: '#C54B00',
    light: '#FFAB42',
    contrast: '#FFFFFF',
  },
  info: {
    main: '#1F69FF',
    dark: '#0040CB',
    light: '#7196FF',
    contrast: '#FFFFFF',
  },
  success: {
    main: '#348337',
    dark: '#00550B',
    light: '#65B363',
    contrast: '#FFFFFF',
  },
  background: {
    default: '#121212',
    paper: '#121212',
  },
  other: {
    divider: 'rgba(255, 255, 255, 0.23)',
    outlinedBorder: 'rgba(255, 255, 255, 0.8)',
    filledInputBackground: 'rgba(255, 255, 255, 0.09)',
    standardInputLine: 'rgba(255, 255, 255, 0.42)',
    snackBar: '#323232',
    ratingActiv: '#FFB400',
  },
  myinherit: {
    main: grey[300],
    contrastText: grey[600],
  },
  primary2: {
    main: '#54A5ED',
    dark: '#0077BA',
    light: '#8CD6FF',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
};

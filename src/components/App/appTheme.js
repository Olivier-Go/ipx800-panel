import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const appTheme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'],
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    primary: {
      light: '#8559da',
      main: '#512da8',
      dark: '#140078',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ede7f6',
      dark: '#bbb5c3',
      contrastText: '#000',
    },
    info: blue,
    type: 'light',

    // primary: {
    //   main: '#1EA4E9',
    // },
    // secondary: {
    //   main: '#44C868',
    // },
    // secondary: {
    //   light: '',
    //   main: '',
    //   dark: '',
    //   contrastText: '',
    // },
  },
});

responsiveFontSizes(appTheme);

export default appTheme;

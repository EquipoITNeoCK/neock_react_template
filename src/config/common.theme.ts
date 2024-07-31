import {
  createTheme,
  PaletteColor,
  TypeBackground,
} from '@mui/material/styles';
import colors from './colors.theme';

declare module '@mui/material/styles' {
  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
    warning: PaletteColor;
    background: TypeBackground;
  }
}

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: 689,
      sm: 1024,
      md: 1400,
      lg: 1700,
      xl: 0,
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
});

export default createTheme(defaultTheme, {
  palette: {
    ...colors,
  },
});

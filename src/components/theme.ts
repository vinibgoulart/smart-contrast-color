import { createTheme, darken, lighten } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import type { PaletteColor } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    white?: PaletteColor;
  }

  interface Palette {
    white?: PaletteColor;
  }
}

const primary = "#556cd6";
const secondary = "#19857b";
const white = "#fefefe";

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
      light: lighten(primary, 0.1),
      dark: darken(primary, 0.1),
      contrastText: "#fff",
    },
    secondary: {
      main: secondary,
      light: lighten(secondary, 0.1),
      dark: darken(secondary, 0.1),
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
    },
    white: {
      main: white,
      light: lighten(white, 0.1),
      dark: darken(white, 0.1),
      contrastText: primary,
    },
  },
});

export default theme;

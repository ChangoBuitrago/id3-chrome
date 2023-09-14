// Supports weights 100-800
import '@fontsource-variable/sora';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Sora Variable',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#00BA7C",
      contrastText: '#FFF'
    },
    secondary: {
      main: "#f91880",
      contrastText: '#FFF'
    },
    text: {
      primary: "#e7e9ea",
    },
    background: {
      default: "#000000"
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "#root": {
          width: "300px",
          height: "400px",
          boxShadow: "inset 0 0 1px 1px #f91880",
          padding: "8px"
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "666px",
          textTransform: "uppercase",
          fontWeight: "600"
        }
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#71767b"
        }
      },
    }
  },
});

export default theme
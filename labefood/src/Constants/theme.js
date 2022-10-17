import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: undefined,
          "&:last-child": {
            paddingBottom: '0.75em'
          }
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#B8B8B8',
    },
    secondary: {
      main: '#5CB646',
    },
    alert: {
      main: '#e02020',
    },
  },
})


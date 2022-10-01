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
      },
})
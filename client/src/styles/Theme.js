import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  components: {
    MuiStack: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box'
        }
      }
    }
  }
})
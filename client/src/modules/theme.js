export const dark = {
  typography: {
    fontFamily: "Nunito",
  },
  palette: {
    type: 'light',
    primary: {
      // light: will be calculated from palette.primary.main,
      //main: '#003EFF',
      main: '#003eff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contast with palette.primary.main
    },
    // secondary: {
    //   // light: '#0066ff',
    //   // main: '#0044ff',
    //   // dark: will be calculated from palette.secondary.main,
    //   // contrastText: '#ffcc00',
    // },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: 6
      }
    },
    MuiMenu: {
      paper: {
        borderRadius: 6
      }
    },
    MuiDialog: {
      paper: {
        borderRadius: 6
      }
    },
    MuiButton: {
      root: {
        // background: 'linear-gradient(45deg, #00FF9B 30%, #003EFF 90%)',
        borderRadius: 6,
        border: 0,
        // color: 'white',
        // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
};
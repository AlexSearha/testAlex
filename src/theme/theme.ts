import { createTheme } from '@mui/material/styles';

const themeInput = createTheme({
  components: {
    // Inputs
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FAFAFA',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #EBEBEB',
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          },
        },
      },
    },
  },
});

const customTabs = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          border: '1px solid #EBEBEB',
          borderRadius: 25,
          fontWeight: 'bold',
          backgroundColor: '#FAFAFA',
          overflow: 'hidden',
        },
        indicator: {
          display: 'none',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          margin: '5px',
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 'bold',
        },
        selected: {
          boxShadow: '1px 1px 3px #00000066',
          fontWeight: 'bold',
          backgroundColor: 'white',
          '&.Mui-focusVisible': {
            outline: 'none',
          },
        },
      },
    },
  },
});

export { themeInput, customTabs };

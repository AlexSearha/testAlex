import { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#5D79F6',
          },
          divider: '#EBEBEB',
          background: {
            default: '#FAFAFA',
            paper: '#fff',
          },
          text: {
            primary: '#787A83',
            secondary: '#000000',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#5D79F6',
          },
          divider: '#383944',
          background: {
            default: '#26262E',
            paper: '#383A44',
          },
          text: {
            primary: '#C6C8D3',
            secondary: '#FFFFFF',
          },
        }),
  },
});

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
          padding: '0px',
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 'bold',
          minHeight: '40px',
          '&.Mui-selected': {
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
  },
});

export { getDesignTokens, themeInput, customTabs };

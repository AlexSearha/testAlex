import { PaletteMode } from '@mui/material';

const lightPalette = {
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
};

const darkPalette = {
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
};

const getDesignTokens = (mode: PaletteMode) => {
  const themePalette = mode === 'light' ? lightPalette : darkPalette;

  return {
    palette: {
      mode,
      ...themePalette,
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `1px solid ${themePalette.divider}`,
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            borderRadius: 25,
            fontWeight: 'bold',
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
              fontWeight: 'bold',
              '&.Mui-focusVisible': {
                outline: 'none',
              },
            },
          },
        },
      },
    },
  };
};

export default getDesignTokens;

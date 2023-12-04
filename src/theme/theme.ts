import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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

export default theme;

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';
// Context
import { useThemeContext } from './theme/ThemeContextProvider';
// Router
import AppRouter from './routes/AppRouter';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

function App() {
  const { theme } = useThemeContext();

  // ----------------------------RETURN----------------------------------//

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

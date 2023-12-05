// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';
// Client
import { ApolloProvider } from '@apollo/client';
// Context
import { useThemeContext } from './theme/ThemeContextProvider';
// Router
import AppRouter from './routes/AppRouter';
import client from './api/client/apolloClient';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

function App() {
  const { theme } = useThemeContext();

  // ----------------------------RETURN----------------------------------//

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;

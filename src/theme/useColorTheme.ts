// React
import { useMemo, useState } from 'react';
// MUI
import { createTheme, PaletteMode } from '@mui/material';
// Local
import getDesignTokens from './theme';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [isLogged, setIsLogged] = useState(false);

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const toggleIsLogged = () => setIsLogged((prevIsLogged) => !prevIsLogged);

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
    toggleIsLogged,
    isLogged,
  };
};

export default useColorTheme;

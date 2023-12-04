// React
import { useMemo, useState } from 'react';
// MUI
import { createTheme, PaletteMode } from '@mui/material';
// Local
import { getDesignTokens } from './theme';

const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const modifiedTheme = useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};

export default useColorTheme;

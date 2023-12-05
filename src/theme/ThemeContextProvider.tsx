/* eslint-disable react/require-default-props */
import { createTheme, Theme } from '@mui/material';
import { createContext, FC, PropsWithChildren, useContext } from 'react';
import useColorTheme from './useColorTheme';
// Types
type ThemeContextType = {
  mode: string;
  toggleColorMode: () => void;
  toggleIsLogged: () => void;
  theme: Theme;
  isLogged: boolean;
};

// ----------------------------FUNCTIONS------------------------------//

export const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
  toggleIsLogged: () => {},
  theme: createTheme(),
  isLogged: false,
});

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

// eslint-disable-next-line react/function-component-definition
export const ThemeContextProvider: FC<PropsWithChildren> = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const value = useColorTheme();
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

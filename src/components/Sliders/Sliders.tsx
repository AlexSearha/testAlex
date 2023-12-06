/* eslint-disable prefer-template */
// React
import React from 'react';
// MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
// inteface
interface SlidersProps {
  tabSelect: number;
  setTabSelect: React.Dispatch<React.SetStateAction<number>>;
}

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function Sliders({ setTabSelect, tabSelect }: SlidersProps) {
  const theme = useTheme();
  // ----------------------------FUNCTIONS------------------------------//

  const handleChange = (event: React.ChangeEvent<object>, newValue: number) => {
    setTabSelect(newValue);
  };

  // ----------------------------RETURN----------------------------------//

  return (
    <Box
      sx={{
        border: theme.palette.divider,
        borderRadius: 15,
        backgroundColor: theme.palette.background.default,
        overflow: 'hidden',
      }}
    >
      <Tabs value={tabSelect} onChange={handleChange} variant="fullWidth">
        <Tab
          label="Se connecter"
          sx={{
            border: tabSelect === 0 ? theme.palette.divider : 'none',
            color:
              tabSelect === 0
                ? theme.palette.text.secondary + ' !important'
                : theme.palette.text.primary,
            boxShadow: tabSelect === 0 ? '1px 1px 3px #00000066' : 'none',
            backgroundColor:
              tabSelect === 0 ? theme.palette.background.paper : 'transparent',
            '&.Mui-selected': {
              outline: 'none',
            },
          }}
        />
        <Tab
          label="S'inscrire"
          sx={{
            border: tabSelect === 1 ? theme.palette.divider : 'none',
            color:
              tabSelect === 0
                ? theme.palette.text.primary
                : theme.palette.text.secondary + ' !important',
            boxShadow: tabSelect === 1 ? '1px 1px 3px #00000066' : 'none',
            backgroundColor:
              tabSelect === 1 ? theme.palette.background.paper : 'transparent',
          }}
        />
      </Tabs>
    </Box>
  );
}

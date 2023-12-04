// React
import React, { useState } from 'react';
// MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
// Components
import { customTabs } from '../../theme/theme';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function Sliders() {
  const [tabSelect, setTabSelect] = useState(0);

  // ----------------------------FUNCTIONS------------------------------//

  const handleChange = (event: React.ChangeEvent<object>, newValue: number) => {
    setTabSelect(newValue);
  };

  // ----------------------------RETURN----------------------------------//

  return (
    <ThemeProvider theme={customTabs}>
      <Box
        sx={{
          border: '1px solid #EDEDED',
          borderRadius: 15,
          backgroundColor: '#FAFAFA',
          overflow: 'hidden',
        }}
      >
        <Tabs value={tabSelect} onChange={handleChange} variant="fullWidth">
          <Tab
            label="Se connecter"
            sx={{
              border: tabSelect === 0 ? '1px solid #EBEBEB' : 'none',
              color: tabSelect === 0 ? 'black !important' : '#787A83',
              boxShadow: tabSelect === 0 ? '1px 1px 3px #00000066' : 'none',
              backgroundColor: tabSelect === 0 ? 'white' : 'transparent',
              '&.Mui-selected': {
                outline: 'none',
              },
            }}
          />
          <Tab
            label="S'inscrire"
            sx={{
              border: tabSelect === 1 ? '1px solid #EBEBEB' : 'none',
              color: tabSelect === 1 ? 'black !important' : '#787A83',
              boxShadow: tabSelect === 1 ? '1px 1px 3px #00000066' : 'none',
              backgroundColor: tabSelect === 1 ? 'white' : 'transparent',
            }}
          />
        </Tabs>
      </Box>
    </ThemeProvider>
  );
}

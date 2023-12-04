import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, ThemeProvider } from '@mui/material';
import { themeInput } from '../../theme/theme';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function InputGroup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // ----------------------------RETURN----------------------------------//

  return (
    <ThemeProvider theme={themeInput}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} m={1}>
        <TextField
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Mot de passe"
          value={password}
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
    </ThemeProvider>
  );
}

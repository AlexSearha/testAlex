// MUI
import TextField from '@mui/material/TextField';
import { Box, ThemeProvider } from '@mui/material';
import { themeInput } from '../../theme/theme';
// interface
interface InputGroupProps {
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  password: string;
}

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function InputGroup({
  setEmail,
  email,
  setPassword,
  password,
}: InputGroupProps) {
  // ----------------------------RETURN----------------------------------//

  return (
    <ThemeProvider theme={themeInput}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }} m={1}>
        <TextField
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          placeholder="Mot de passe"
          type="password"
          value={password}
          InputProps={{ disableUnderline: true }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
    </ThemeProvider>
  );
}

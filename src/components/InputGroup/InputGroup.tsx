// MUI
import TextField from '@mui/material/TextField';
import { Box, useTheme } from '@mui/material';
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
  const theme = useTheme();
  // ----------------------------RETURN----------------------------------//

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.default,
      }}
      m={1}
    >
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
  );
}

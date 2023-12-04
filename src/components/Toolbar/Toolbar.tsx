// import './style.scss';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import AddIcon from '@mui/icons-material/Add';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function ToolbarComponent() {
  const theme = useTheme();
  return (
    <Toolbar
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        color: theme.palette.text.secondary,
      }}
    >
      <Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
        {/* {username} */}
        Projets
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          sx={{
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
          variant="contained"
          startIcon={<AddIcon />}
        >
          Nouveau projet
        </Button>
      </Stack>
    </Toolbar>
  );
}

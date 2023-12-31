// React
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// MUI
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// Icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
// Context
import { useThemeContext } from '../../theme/ThemeContextProvider';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function Header() {
  const { mode, toggleColorMode, toggleIsLogged, isLogged } = useThemeContext();
  const theme = useTheme();
  const navigate = useNavigate();

  // ----------------------------FUNCTIONS------------------------------//

  const handleLogout = () => {
    toggleIsLogged();
  };

  // ----------------------------USEEFFECTS------------------------------//

  useEffect(() => {
    if (!isLogged) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogged]);

  // ----------------------------RETURN----------------------------------//

  return (
    <AppBar
      position="static"
      sx={{ background: theme.palette.background.default, boxShadow: 0 }}
    >
      <Toolbar sx={{ justifyContent: isLogged ? 'normal' : 'flex-end' }}>
        {isLogged && (
          <Typography
            component="div"
            sx={{ flexGrow: 1, color: theme.palette.text.secondary }}
            fontWeight={700}
          >
            {/* {username} */}
            Bienvenu Alexis
          </Typography>
        )}
        <div>
          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode}>
            {mode === 'light' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          {isLogged ? (
            <Tooltip title="Se déconnecter" onClick={handleLogout} arrow>
              <IconButton color="inherit">
                <LogoutOutlinedIcon style={{ color: '#FF6666' }} />
              </IconButton>
            </Tooltip>
          ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}

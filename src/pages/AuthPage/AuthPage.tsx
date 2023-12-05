import React, { useState } from 'react';
// MUI
import { Box, Button } from '@mui/material';
// Client
import { useMutation } from '@apollo/client';
// Images
import logo from '../../assets/logo-white.svg';
// Components
import Sliders from '../../components/Sliders/Sliders';
import InputGroup from '../../components/InputGroup/InputGroup';
// API
import { LOGIN } from '../../api/queries/queries';
// CSS
import './style.scss';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function AuthPage() {
  const [tabSelect, setTabSelect] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMutation] = useMutation(LOGIN);

  // ----------------------------FUNCTIONS------------------------------//

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const { data } = await loginMutation({
        variables: {
          email,
          password,
        },
      });
      console.log('data: ', data);
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  // ----------------------------RETURN----------------------------------//

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div className="login-logo">
        <img src={logo} alt="logo de archireport" />
        <p>L&apos;application pour vos suivis de chantier et de projets</p>
      </div>
      <form className="login-form" method="post" onSubmit={handleSubmit}>
        <Sliders setTabSelect={setTabSelect} tabSelect={tabSelect} />
        <div style={{ flexGrow: 1 }}>
          {tabSelect === 0 ? (
            <InputGroup
              setEmail={setEmail}
              email={email}
              setPassword={setPassword}
              password={password}
            />
          ) : (
            <p>Formulaire d&apos;inscription</p>
          )}
        </div>
        <Button
          variant="contained"
          sx={{
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 'bold',
          }}
          type="submit"
        >
          Se Connecter
        </Button>
      </form>
    </Box>
  );
}

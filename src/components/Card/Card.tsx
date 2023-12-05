// MUI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, useTheme } from '@mui/material';
import test from '../../assets/project-placeholder-dark.webp';
// Components
import DropdownCard from '../Dropdowns/Dropdown';
// CSS
// import './style.scss';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function CardComponent() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        flex: '1 0 auto',
        maxWidth: 266,
        boxShadow: 0,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardMedia
        component="img"
        image={test}
        alt="dark-placeholder"
        height={168}
      />
      <CardContent
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
          backgroundColor: theme.palette.background.default,
          pt: 1,
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant="body2"
            color="text.primary"
          >
            Lumia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brest
          </Typography>
        </Box>
        <DropdownCard />
      </CardContent>
    </Card>
  );
}

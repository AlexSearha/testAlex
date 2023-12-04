// MUI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
// Components
import DropdownCard from '../Dropdowns/Dropdown';
// CSS
// import './style.scss';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function CardComponent() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
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

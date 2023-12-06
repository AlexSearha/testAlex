// MUI
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, useTheme } from '@mui/material';
// Images
import darkGenericImage from '../../assets/project-placeholder-dark.webp';
import lightGenericImage from '../../assets/project-placeholder-light.webp';
// Components
import DropdownCard from '../Dropdowns/Dropdown';
// CSS
import './style.scss';
// Interface
interface CardProps {
  title: string;
  description: string;
  image: string;
}

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function CardComponent({
  title,
  description,
  image,
}: CardProps) {
  const theme = useTheme();
  const genericImage =
    theme.palette.mode === 'dark' ? darkGenericImage : lightGenericImage;

  // ----------------------------RETURN----------------------------------//

  return (
    <Card
      className="card"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 266,
        boxShadow: 0,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardMedia
        className="card-image"
        component="img"
        image={image || genericImage}
        alt="dark-placeholder"
        height={168}
      />
      <CardContent
        className="card-content"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 0,
          backgroundColor: theme.palette.background.default,
          pt: 1,
          '&:last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: 'bold' }}
            variant="body2"
            color="text.primary"
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
        <DropdownCard />
      </CardContent>
    </Card>
  );
}

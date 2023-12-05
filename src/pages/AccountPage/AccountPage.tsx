import { Box } from '@mui/material';
import CardComponent from '../../components/Card/Card';
import ToolbarComponent from '../../components/Toolbar/Toolbar';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function AccountPage() {
  return (
    <>
      <ToolbarComponent />
      <Box sx={{ margin: 3, display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </Box>
    </>
  );
}

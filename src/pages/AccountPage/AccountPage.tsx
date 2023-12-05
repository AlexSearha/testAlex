// Mui
import { Box } from '@mui/material';
// API
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../../api/queries/queries';
// Components
import CardComponent from '../../components/Card/Card';
import ToolbarComponent from '../../components/Toolbar/Toolbar';
// Data
import projectList from '../../data/fakeData';

// --------------------------------------------------------------------//
// ----------------------------Component-------------------------------//
// --------------------------------------------------------------------//

export default function AccountPage() {
  // const { data } = useQuery(GET_PROJECT, { variables: { filter: 'MINE' } });

  return (
    <>
      <ToolbarComponent />
      <Box
        sx={{
          padding: 3,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {projectList?.map((card) => (
          <CardComponent
            key={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
        <CardComponent
          title="Nouveaux projet"
          description="Votre nouveau projet"
          image=""
        />
      </Box>
    </>
  );
}

import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

function ClientExpenses() {
  const { clientId } = useParams();
  const navigate = useNavigate();

  const navigateBackToHome = () => {
    navigate('/');
  };

  return (
    <Box>
      <Typography>{clientId}</Typography>
      <Button onClick={() => navigateBackToHome()}>Back</Button>
    </Box>
  );
}

export default ClientExpenses;

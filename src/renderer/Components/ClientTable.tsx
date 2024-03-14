import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  IconButton,
  Card,
} from '@mui/material';
import { Delete, Add } from '@mui/icons-material/';
import { useNavigate } from 'react-router-dom';
import { useClientContext } from '../Providers/ClientProvider';
import { Client } from '../Models/client';

interface ClientTableProps {
  dialogOpen: () => void;
}

function ClientTable({ dialogOpen }: ClientTableProps) {
  const { clients, removeClient } = useClientContext();
  const navigate = useNavigate();

  const handleClientClick = (client: Client, id: number) => {
    console.log(client);
    console.log(id);

    navigate(`/clients/${id}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ overflow: 'none', padding: '3rem', minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">company(g)</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow
              onClick={() => handleClientClick(client, index)}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              sx={{
                '&:hover': { cursor: 'pointer', backgroundColor: '#f5f5f5' },
              }} // Optional: Add hover effect to indicate clickable
            >
              <TableCell>{client.name}</TableCell>
              <TableCell align="right">{client.email}</TableCell>
              <TableCell align="right">{client.company}</TableCell>
              <TableCell align="right" padding="none" size="small">
                <Delete
                  sx={{
                    margin: '0 1rem',
                    cursor: 'pointer',
                    transition:
                      'background-color 0.3s ease, transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.15)',
                    },
                  }}
                  onClick={() => removeClient(index)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter component={Card} sx={{ marginTop: '2rem' }}>
          <TableCell />
          <TableCell />
          <TableCell />
          <TableCell size="small" align="right">
            <IconButton
              sx={{
                color: 'white',
                backgroundColor: '#42a7cf',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                '&:hover': {
                  backgroundColor: '#77cced',
                  transform: 'scale(1.15)',
                },
              }}
              onClick={() => dialogOpen()}
              aria-label="add"
            >
              <Add />
            </IconButton>
          </TableCell>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default ClientTable;

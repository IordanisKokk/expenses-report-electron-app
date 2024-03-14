/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import AddClientDialog from '../Components/AddClientDialog';
import ClientTable from '../Components/ClientTable';
import { useClientContext } from '../Providers/ClientProvider';

function Intro() {
  const { clients, addClient, removeClient } = useClientContext();
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setDialogOpen(false);
  };
  return (
    <Box>
      <Typography>Hello</Typography>
      {clients && clients.length > 0 ? (
        <Box>
          <Typography>Select a client&apos;s account</Typography>
          <ClientTable dialogOpen={openDialog} />
        </Box>
      ) : (
        <Box>
          <Typography>Add a new client</Typography>
          <Button onClick={openDialog} variant="contained">
            Add client
            <Add />
          </Button>
        </Box>
      )}
      <AddClientDialog open={dialogOpen} handleClose={closeDialog} />
    </Box>
  );
}

export default Intro;

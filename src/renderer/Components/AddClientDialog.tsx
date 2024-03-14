import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { useClientContext } from '../Providers/ClientProvider';

function AddClientDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const { addClient } = useClientContext();

  // Function to handle form submission
  const handleSubmit = () => {
    addClient(name, email, company);
    // Close the dialog
    setName('');
    setEmail('');
    setCompany('');
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Client</DialogTitle>
      <DialogContent>
        {/* Form inputs */}
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          label="Email"
          type="text"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Company"
          type="text"
          fullWidth
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {/* Buttons */}
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddClientDialog;

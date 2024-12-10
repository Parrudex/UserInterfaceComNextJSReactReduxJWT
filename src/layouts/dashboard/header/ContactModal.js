import { useState } from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

export function ContactModal({ modalIsOpen, onClose }) {
  const [title, setTitle] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSendEmail = () => {
    console.log('[title]: ', title);
    console.log('[message]: ', message);

    // TODO implement function to send email

    onClose();
  };

  return (
    <Dialog
      open={modalIsOpen}
      onClose={onClose}
      hideBackdrop
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <DialogTitle style={{ marginBottom: '1rem' }}>Suporte</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Preencha os campos abaixo com uma sugestão ou comentário, e um e-mail
          será enviado para nossa equipe de suporte.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Digite um título para a sugestão ou comentário"
          type="text"
          fullWidth
          variant="standard"
          onChange={event => setTitle(event.target.value)}
        />
        <TextField
          margin="dense"
          id="name"
          label="Digite sua sugestão ou comentário"
          type="text"
          fullWidth
          variant="standard"
          onChange={event => setMessage(event.target.value)}
        />
        <DialogActions disableSpacing style={{ padding: '16px 8px 0' }}>
          <Button color="error" variant="contained" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            onClick={handleSendEmail}
            disabled={!title || !message}
          >
            Enviar
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

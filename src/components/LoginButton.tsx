import { useState } from 'react';
import { Button } from '@mui/material/';
import LoginDialog from './functions/LoginDialog';

export default function LoginButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Button
            variant="text"
            onClick={handleClickOpen}>
            Login
        </Button>
        <LoginDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
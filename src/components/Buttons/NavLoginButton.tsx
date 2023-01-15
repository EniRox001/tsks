import { useState } from 'react';
import { Link } from '@mui/material/';
import LoginDialog from '../Functions/LoginDialog';

export default function NavLoginButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Link color="inherit" underline="none" onClick={handleClickOpen}>Login</Link>
        <LoginDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
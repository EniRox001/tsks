import { useState } from 'react';
import { Link } from '@mui/material/';
import SignupDialog from '../Functions/SignUpDialog';

export default function NavSignupButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        <Link color="inherit" underline="none" onClick={handleClickOpen}>Sign up</Link>
        <SignupDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
import { useState } from 'react';
import { Button } from '@mui/material/';
import SignupDialog from '../functions/SignUpDialog';

export default function SignupButton() {
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
            variant="outlined"
            onClick={handleClickOpen}>
            Sign up
        </Button>
        <SignupDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
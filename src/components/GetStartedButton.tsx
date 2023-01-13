import { useState } from 'react';
import { Button } from '@mui/material/';
import SignupDialog from './functions/SignUpDialog';

export default function GetStartedButton() {
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
       variant="contained" 
       onClick={handleClickOpen}
       sx={{
            width: {
            xs: '80vw',
            sm: 'inherit'
            },
        }}>Get Started</Button>
        <SignupDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
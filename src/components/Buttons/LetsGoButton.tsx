import { useState } from 'react';
import { RocketLaunch } from "@mui/icons-material";
import { Button } from '@mui/material/';
import SignupDialog from '../Functions/SignUpDialog';

export default function LetsGoButton() {
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
            size="large" 
            variant="outlined" 
            startIcon={<RocketLaunch />}
            onClick={handleClickOpen}>Let's Go
        </Button>
        <SignupDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
}
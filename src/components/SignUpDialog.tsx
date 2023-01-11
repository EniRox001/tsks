import { useState } from 'react';
import { Dialog, DialogTitle, Button, Typography, DialogContent, TextField, Stack, DialogActions } from '@mui/material/';

export interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
}

function SignupDialog(props: SignupDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>
        <Typography variant="h4">Enter Details to Sign up</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
            <TextField required id="first-name" label="First Name" variant="outlined" />
            <TextField required id="last-name" label="Last Name" variant="outlined" />
            <TextField required id="username" label="Username" variant="outlined" />
            <TextField required id="password" label="Password" type="password" autoComplete="current-password" variant="outlined" />
            <Button variant='outlined' sx={{
                p: 2
            }}>Sign up</Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}

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
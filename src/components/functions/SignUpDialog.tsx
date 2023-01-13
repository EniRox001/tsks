import { Dialog, DialogTitle, Button, Typography, DialogContent, TextField, Stack, IconButton, Link } from '@mui/material/';
import { Close } from '@mui/icons-material';

export interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupDialog(props: SignupDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <Stack direction="row" justifyContent='flex-end'>
        <IconButton aria-label="close" onClick={handleClose} sx={{mx : 2, my : 1}}>
          <Close />
        </IconButton>
      </Stack>
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
            <Stack direction='row' spacing={1}>
                <Typography>Already have an account?</Typography>
                <Link 
                    href="#"
                    underline='none'
                    >Sign in
                </Link>
            </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
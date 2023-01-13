import { Dialog, DialogTitle, Button, Typography, DialogContent, TextField, Stack, Link } from '@mui/material/';

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginDialog(props: LoginDialogProps) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <DialogTitle>
        <Typography variant="h4">Enter Details to Login</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
            <TextField required id="username" label="Username" variant="outlined" />
            <TextField required id="password" label="Password" type="password" autoComplete="current-password" variant="outlined" />
            <Button variant='outlined' sx={{
                p: 2
            }}>Login</Button>
            <Stack direction='row' spacing={1}>
                <Typography>Don't have an account?</Typography>
                <Link 
                    href="#"
                    underline='none'
                    >Sign up
                </Link>
            </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
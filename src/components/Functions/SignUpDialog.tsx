import { Dialog, DialogTitle, Button, Typography, DialogContent, TextField, Stack, IconButton, Link } from '@mui/material/';
import { Close } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';

export interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupDialog(props: SignupDialogProps) {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  })

  const handleChange = ( e : ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUserData({
      ...userData,
      [e.target.name] : value
    });
  };

  const handleSubmit = () => {
    //Perform server validation here
  }

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
            <TextField required id="first-name" label="First Name" name="firstName" variant="outlined" value={userData.firstName} onChange={handleChange}/>
            <TextField required id="last-name" label="Last Name" name="lastName" variant="outlined" value={userData.lastName} onChange={handleChange}/>
            <TextField required id="username" label="Username" name="username" variant="outlined" value={userData.username} onChange={handleChange}/>
            <TextField required id="password" label="Password" name="password" type="password" autoComplete="current-password" variant="outlined" value={userData.password} onChange={handleChange}/>
            <Button variant='outlined' sx={{ p: 2 }} onClick={handleSubmit}>Sign up</Button>
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
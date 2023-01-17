import { Dialog, DialogTitle, Button, Typography, DialogContent, TextField, Stack, IconButton, Link, Backdrop, CircularProgress, Snackbar } from '@mui/material/';
import { Close } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';

import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../../firebase/firebase';

export interface SignupDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupDialog(props: SignupDialogProps) {

  const { onClose, open } = props;

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
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

  const handleClose = () => {
    onClose();
  };

  const setLoadingFalse = () => {
    setLoading(false);
  };
  const handleLoadingToggle = () => {
    setLoading(!loading);
  };

  const openSnackbar = () => {
    setSnackbar(true);
  }

  const closeSnackbar = () => {
    setSnackbar(false);
  }
  
  const handleSubmit = () => {
    handleLoadingToggle();
    createUser().then(res => {
      if (res == 'success') {
        setSnackbarText('Signup Successful');
        setLoadingFalse();
        setTimeout(() => {handleClose();}, 3000)
        //Add redirection to another page here
      } else {
        setSnackbarText('An error occured');
      }
      openSnackbar();
    });
  }

  const createUser = async() => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        password: userData.password
      });
      return 'success';
    } catch (e) {
      return 'error';
    }
  }

  const snackbarButtonAction = (
    <>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={closeSnackbar}>
          <Close fontSize='small'/>
      </IconButton>
    </>
  )

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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        onClick={setLoadingFalse}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar 
        open={snackbar}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        message={snackbarText}
        action={snackbarButtonAction}
      />
    </Dialog>
  );
}
import { Dialog, DialogTitle, Button, Typography, DialogContent, TextField, Stack, Link, IconButton } from '@mui/material/';
import { Close } from '@mui/icons-material';
import { ChangeEvent, useState } from 'react';
import { db } from '../../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";

export interface LoginDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginDialog(props: LoginDialogProps) {

    const { onClose, open } = props;

    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState(false);
    const [snackbarText, setSnackbarText] = useState('');
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const handleChange = ( e : ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
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
        //Create server function to add login functionality
    }

    // const loginUser = async() => {
    //     const docRef = doc(db, "user", {
    //         'username': userData.username,
    //         'password': userData.password
    //     });
    //     const docSnap = await getDoc(docRef);
    // }

    return (
        <Dialog onClose={handleClose} open={open} fullWidth={true}>
            <Stack direction="row" justifyContent='flex-end'>
                <IconButton aria-label="close" onClick={handleClose} sx={{mx : 2, my : 1}}>
                    <Close />
                </IconButton>
            </Stack>
            <DialogTitle>
                <Typography variant="h4">Enter Details to Login</Typography>
            </DialogTitle>
            <DialogContent>
                <Stack spacing={2}>
                    <TextField required id="username" name="username" label="Username" variant="outlined" value={userData.username} onChange={handleChange}/>
                    <TextField required id="password" name="password" label="Password" type="password" autoComplete="current-password" variant="outlined" value={userData.password} onChange={handleChange}/>
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
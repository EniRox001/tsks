import { IconButton, Dialog, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText, Stack, Link, makeStyles } from "@mui/material";
import { Menu, Close} from '@mui/icons-material';
import { useState } from "react";
import NavLoginButton from "./Buttons/NavLoginButton";
import NavSignupButton from "./Buttons/NavSignupButton";

export default function DrawerButton() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <IconButton
                onClick={handleClickOpen}
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{display: { xs: 'block', sm: 'none' } }}
            > 
                <Menu />
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                >
                    <Box
                        bgcolor='#121212'
                        width='100vw'
                        height='100vh'>
                        <Stack direction="row" justifyContent='flex-end'>
                            <IconButton aria-label="close" onClick={handleClose} sx={{mx : 2, my : 1}}>
                                <Close />
                            </IconButton>
                        </Stack>
                        <Typography variant='h4' sx={{ textAlign: 'center', m: 4 }}>tsks.</Typography>
                        <Divider />
                        <List>
                            <ListItem key="Login" disablePadding>
                                <ListItemButton sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <NavLoginButton />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="Login" disablePadding>
                                <ListItemButton sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <NavSignupButton />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
            </Dialog>
        </>
    )
}
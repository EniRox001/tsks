import { IconButton, Drawer, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

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
                <MenuIcon />
            </IconButton>
            <Drawer 
                anchor="left"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    sx: {
                        width: 250,
                        backgroundColor: 'black'
                    }
                }}>
                    <Box>
                        <Typography variant='h4' sx={{ textAlign: 'center', m: 4 }}>tsks.</Typography>
                        <Divider />
                        <List>
                            <ListItem key="Login" disablePadding>
                                <ListItemButton sx={{textAlign: 'center'}}>
                                    <ListItemText primary='Login' />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="Login" disablePadding>
                                <ListItemButton sx={{textAlign: 'center'}}>
                                    <ListItemText primary='Sign up' />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
            </Drawer>
        </>
    )
}
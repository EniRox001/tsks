import { AppBar, Toolbar, IconButton, Dialog, Box, Divider, Typography, List, ListItem, ListItemButton, Stack, Link, Button  } from '@mui/material/';
import { Menu, Close, OpenInBrowser} from '@mui/icons-material';
import { MouseEventHandler, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { motion } from 'framer-motion';


export default function NavBar(props: {dialog: boolean, openDialog: MouseEventHandler<HTMLButtonElement>, closeDialog: MouseEventHandler<HTMLButtonElement>}) {

  return (
    <Box>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            tsks.
          </Typography>
          {/* Mobile Drawer Dialog Screen */}
          <>
            <IconButton
                onClick={props.dialog === true ? props.closeDialog : props.openDialog}
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
                  open={props.dialog}
                  onClose={props.closeDialog}
                  aria-labelledby="dialog-title"
                  aria-describedby="dialog-description"
                >
                  <Box
                        bgcolor='#121212'
                        width='100vw'
                        height='100vh'>
                        <Stack direction="row" justifyContent='flex-end'>
                            <IconButton aria-label="close" sx={{mx : 2, my : 1}} onClick={props.closeDialog}>
                                <Close />
                            </IconButton>
                        </Stack>
                        <Typography
                            component={motion.div} 
                            variant='h4'
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .5 }} 
                            sx={{ textAlign: 'center', m: 4 }}
                          >tsks.</Typography>
                        <Divider />
                        <List>
                            <ListItem 
                              key="Login" 
                              disablePadding
                              component={motion.div}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: .5, delay: .5 }}
                              >
                                <ListItemButton sx={{ display: 'flex', justifyContent: 'center'}}>
                                    <Link href='/signup' color="inherit" underline="none">Sign up</Link>
                                </ListItemButton>
                            </ListItem>
                            <ListItem 
                              key="Login" 
                              disablePadding
                              component={motion.div}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: .5, delay: .5 }}
                              >
                                <ListItemButton sx={{ display: 'flex', justifyContent: 'center'}}>
                                  <Link href='/login' color="inherit" underline="none">Login</Link>                                     
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Dialog>
          </>
          
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <Button
                  variant="outlined" 
                  component={RouterLink}
                  to="/login">
                  Login
            </Button>
            
            {/* Link to Sign up page here */}
            <Button
                  variant="contained" 
                  component={RouterLink}
                  to="/signup ">
                  Sign Up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

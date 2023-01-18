import { AppBar, Toolbar, IconButton, Dialog, Box, Divider, Typography, List, ListItem, ListItemButton, Stack, Link, Button  } from '@mui/material/';
import { Menu, Close} from '@mui/icons-material';
import { useState } from 'react';
import SignupDialog from './Functions/SignUpDialog';
import LoginDialog from './Functions/LoginDialog';


export default function NavBar() {
  const [drawer, openDrawer] = useState(false);
  const [signupDialog, openSignupDialog] = useState(false);
  const [loginDialog, openLoginDialog] = useState(false);

  const handleDrawerOpen = () => {
    openDrawer(true);
  };

  const handleDrawerClose = async() => {
    openDrawer(false);
  };

  const handleSignupOpen = () => {
    openSignupDialog(true);
  };

  const handleSignupClose = () => {
    openSignupDialog(false);
  };

  const handleLoginOpen = () => {
    openLoginDialog(true);
  };

  const handleLoginClose = () => {
    openLoginDialog(false);
  };

  const handleMobileSignupOpen = () => {
    handleDrawerClose().then(() => handleSignupOpen());
  };

  const handleMobileLoginOpen = () => {
    handleDrawerClose().then(() => handleLoginOpen());
  }
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
                onClick={handleDrawerOpen}
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
                open={drawer}
                onClose={handleDrawerClose}
                >
                    <Box
                        bgcolor='#121212'
                        width='100vw'
                        height='100vh'>
                        <Stack direction="row" justifyContent='flex-end'>
                            <IconButton aria-label="close" onClick={handleDrawerClose} sx={{mx : 2, my : 1}}>
                                <Close />
                            </IconButton>
                        </Stack>
                        <Typography variant='h4' sx={{ textAlign: 'center', m: 4 }}>tsks.</Typography>
                        <Divider />
                        <List>
                            <ListItem key="Login" disablePadding>
                                <ListItemButton sx={{ display: 'flex', justifyContent: 'center'}}>
                                    {/* <NavLoginButton /> */}
                                    <Link color="inherit" underline="none" onClick={handleMobileSignupOpen}>Sign up</Link>
                                      <SignupDialog
                                      open={signupDialog}
                                      onClose={handleSignupClose}
                                    />
                                </ListItemButton>
                            </ListItem>
                            <ListItem key="Login" disablePadding>
                                <ListItemButton sx={{ display: 'flex', justifyContent: 'center'}}>
                                <Link color="inherit" underline="none" onClick={handleMobileLoginOpen}>Login</Link>
                                      <LoginDialog
                                      open={loginDialog}
                                      onClose={handleLoginClose}
                                    />
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
                  variant="text"
                  onClick={handleLoginOpen}>
                  Login
              </Button>
              <LoginDialog
              open={loginDialog}
              onClose={handleLoginClose}
            />
            <Button
                  variant="outlined"
                  onClick={handleSignupOpen}>
                  Sign up
              </Button>
              <SignupDialog
              open={signupDialog}
              onClose={handleSignupClose}
            />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

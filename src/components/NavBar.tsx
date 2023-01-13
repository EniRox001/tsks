import { AppBar, Box, Toolbar, Typography, Button, IconButton, Stack } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import SignupButton from './SignupButton';
import LoginButton from './LoginButton';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            tsks.
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            <LoginButton />
            <SignupButton />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

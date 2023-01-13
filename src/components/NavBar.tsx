import { AppBar, Box, Toolbar, Typography, Stack } from '@mui/material/';
import LoginButton from './Buttons/LoginButton';
import SignupButton from './Buttons/SignupButton';
import DrawerButton from './Drawer';


export default function NavBar() {
  return (
    <Box>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            tsks.
          </Typography>
          <DrawerButton />
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

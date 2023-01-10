import { AppBar, Box, Toolbar, Typography, Button, IconButton, Stack } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="fixed" color="transparent">
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
            <Button variant="text">Login</Button>
            <Button
              variant="outlined"
              onClick={() => {
                alert('sign up');
              }}
            >
              Sign up
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

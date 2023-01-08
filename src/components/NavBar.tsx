import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tsks
          </Typography>
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

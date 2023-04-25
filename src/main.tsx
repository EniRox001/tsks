import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Landing from './routes/Landing';
import ErrorPage from './routes/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: 'root',
    element: <Landing/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: 'signup',
    element: <div>Sign Up</div>
  }
])

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Fredoka One',
    ].join(','),
  
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={darkTheme}>
    <React.StrictMode>
      <CssBaseline />
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeProvider>

);

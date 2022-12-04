import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Cookies from "universal-cookie";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();

const theme = createTheme({
  palette: {

    primary: {
      main: '#FFFFFF',

    },
    secondary: {
      main: '#FFFFFF',
      contrastText: '#FFFFFF',
    },
    background: {
      default: "#FFFFFF"
    },
    mode: 'dark',
  },
});

export default function Navbar() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    cookies.set('isAdmin_premium', "", {path: '/', expires: new Date(Date.now()-1)});
    cookies.set('name_premium', "", {path: '/', expires: new Date(Date.now()-1)});
    cookies.set('token_premium', "", {path: '/', expires: new Date(Date.now()-1)});
    cookies.set('user_id_premium', "", {path: '/', expires: new Date(Date.now()-1)});
    window.location.href = "/"
  }
  let nama = cookies.get('name_premium')
  return (
    <ThemeProvider theme={theme}>   
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{background : '#272727'}} >
          <Toolbar>
          <Box
          component="img"
          sx={{
            height: 50,
            width: 50,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Logo Bonekify"
          src="/img/Bonekify.png"/>
          {/* TIPOGRAFINYA DUMMY CUMAN BANTU BIAR MOJOKKIN LOG OUT KE KANAN */}
            <Typography variant="h6" component="div" sx={{ marginLeft: 'auto', marginRight: '15px'}}>{nama}</Typography>
            <Button style={{backgroundColor: "rgba(150,0,0,0.5)", color: 'white'}} onClick={routeChange} color="error">Log out</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
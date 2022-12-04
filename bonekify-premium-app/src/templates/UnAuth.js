import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from  '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {

    primary: {
      main: '#BC9928',

    },
    secondary: {
      main: '#0000ff',
      contrastText: '#00ff00',
    },
    background: {
      default: "#242424"
    },
    mode: 'dark',
  },
});

class UnAuth extends Component{
  constructor(props){
    super(props)
    this.state = {
      errorMsg: '',
      status: false
    }
  }

    render() {

      return (
        <ThemeProvider theme={theme}>
          <Paper vairant = "outlined" elevation = {6}  sx={{width: '50%', margin: '10px auto', padding: '50px', marginTop: '290px',}}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 9px gold',}}>
                You Cant Access this page right now!
              </Typography>
            </Box>
          </Paper>
        </ThemeProvider>
      )
    }
  }
  
export default UnAuth;
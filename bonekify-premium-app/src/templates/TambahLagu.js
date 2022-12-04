import React, { Component } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from  '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Cookies from "universal-cookie";
import Alert from '@mui/material/Alert';


const cookies = new Cookies();

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
        default: "#323232"
    },
    mode: 'dark',
  },
});

class TambahLagu extends Component{
  constructor(props){
    super(props)
    this.state = {
      message: false
    }
  }

    render() {

    const handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData(event.target);
        
        console.log(event.target.audio_path.files[0])
        
        // axios.post('http://localhost:1400/lagu/auth/create', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //     'Authorization': cookies.get('token_premium')
        //   } 
        // })
        // .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //     this.setState({
        //       message: true
        //     });
        //     setTimeout(() => {
        //       this.setState({
        //         message: false
        //       });
        //     }, 3000);
            
        // }).catch(err => {
        //     console.log(err);
        // })
      };

      return (
        <ThemeProvider theme={theme}>
          <Paper vairant = "outlined" elevation = {6}  sx={{width: '50%', margin: '10px auto', padding: '50px', marginTop: '40px',}}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 9px gold',}}>
                Add your songs here!
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="judul"
                  label="judul"
                  name="judul"
                  autoFocus
                  sx = {{color: 'red'}}
                />
                <TextField
                  type = "file"
                  inputProps={{ accept: 'audio/wav, audio/mp3'}} 
                  margin="normal"
                  required
                  fullWidth
                  name="audio_path"
                  label="audio path"
                  id="audio_path"
                />
                <Button color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button >
                { this.state.message &&
                  <div><Alert sx = {{width: '100%', textAlign: 'center'}} severity="success">Lagu baru berhasil ditambahkan!</Alert><br /></div>
                }
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      )
    }
  }
  
export default TambahLagu;
import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Cookies from "universal-cookie";
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from  '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
      default: "#242424"
    },
    mode: 'dark',
  },
});

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {
      errorMsg: '',
      emailMsg: '',
      userMsg: '',
      pass: '',
      cPass: '',
      status: false
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleCPass = this.handleCPass.bind(this);
  }

  handleEmail = (event) => {
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    let email = event.target.value
    let msg = ''
    if (!regex.test(email)){
      msg = "Format email tidak sesuai! "
    }
    this.setState({
      emailMsg : msg
    });
}

handleUser = (event) => {
  const regex = new RegExp(/^[a-zA-Z0-9_]*$/);
  let user = event.target.value
  let msg = ''
  if (!regex.test(user)){
    msg = "Format username tidak sesuai! (Alphanumerics only) "
  }
  this.setState({
    userMsg : msg
  });
}

handlePass = (event) => {
  this.setState({
    pass : event.target.value
  });
}

handleCPass = (event) => {
  let cpass = event.target.value
  let msg = ''
  if (cpass !== this.state.pass){
    msg = "Confirm password tidak sama!"
  }
  this.setState({
    cPass : msg
  });
}

    render() {
      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let name = data.get('name')
        let email = data.get('email')
        let username= data.get('username')
        let password= data.get('password')
        let cpassword = data.get('confirm-password')

        if ((username.length === 0) || (password.length === 0) || (name.length === 0) || (email.length === 0) || (cpassword.length === 0)){
          this.setState({
            errorMsg : 'Salah satu field masih kosong!'
          });
        }else {
          if ((this.state.emailMsg !== '') || (this.state.userMsg !== '') || (this.state.cPass !== '')){
            this.setState({
              errorMsg : 'Masih terdapat satu field yang tidak sesuai!'
            });
          }         else {
            let dataToSend = JSON.stringify({"username": username, "password": password, "email": email, "name": name});
            fetch('http://localhost:1400/user/register', {
              method: 'POST',
              mode: "cors",
              body: dataToSend,        
              headers: {
                'Content-Type': 'application/json'
            }
            
          }).then((response) => {
            this.setState({
              status : response.ok
            });
            return response.json();
          })
          .then((data) => {
            if (!this.state.status){
              this.setState({
                errorMsg: data.message
              });
            } else {
              cookies.set('isAdmin_premium', '0', {path: '/'});
              cookies.set('token_premium', data.token, {path: '/'});
              cookies.set('user_id_premium', data.user_id, {path: '/'});
              cookies.set('name_premium', data.name, {path: '/'});

              
              window.location.href = "/penyanyi"
            }
          })
        }
        }
      };

      return (
        <ThemeProvider theme={theme}>
          <Paper vairant = "outlined" elevation = {8}  sx={{width: '50%', margin: '10px auto', padding: '50px', marginTop: '50px',}}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 9px gold',}}>
                Sign up
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 , width: '100%' }}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="name"
                  label="Your name"
                  id="name"
                />
                <TextField
                  margin="normal"
                  fullWidth
                  onChange = {this.handleUser}
                  id="username"
                  label="Username"
                  name="username"
                  autoFocus
                />
                { this.state.userMsg.length >0  &&
                  <div><Alert sx = {{width: '100%', textAlign: 'center'}} severity="error">{this.state.userMsg}</Alert></div>
                }
                <TextField
                  margin="normal"
                  fullWidth
                  onChange = {this.handleEmail}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                />
                { this.state.emailMsg.length >0  &&
                  <div><Alert sx = {{width: '100%', textAlign: 'center'}} severity="error">{this.state.emailMsg}</Alert></div>
                }
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange = {this.handlePass}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  onChange = {this.handleCPass}
                  name="confirm-password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                />
                { this.state.cPass.length >0  &&
                  <div><Alert sx = {{width: '100%', textAlign: 'center'}} severity="error">{this.state.cPass}</Alert></div>
                }
                <Button color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button >                
                { this.state.errorMsg.length >0  &&
                  <div><Alert sx = {{width: '100%', textAlign: 'center'}} severity="error">{this.state.errorMsg}</Alert><br /></div>
                }
                <Link href="/" >
                  {"Already have an account? Sign In"}
                </Link>
              </Box>
            </Box>
          </Paper>
        </ThemeProvider>
      )
    }
  }
  
export default Register;
import React, { Component } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Lagu from './Lagu';
import Cookies from "universal-cookie";

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

class DaftarLagu extends Component{
    constructor(props){
      super(props)
      this.state = {
        songs : [],
        page : 1
      }
      this.handleDelete = this.handleDelete.bind(this);
      this.handlePagination = this.handlePagination.bind(this);
      this.handleEdit = this.handleEdit.bind(this)
      this.handleEdit2 = this.handleEdit2.bind(this)
      this.getSongs = this.getSongs.bind(this)
    }

    componentDidMount(){
      this.getSongs()
      this.addInterval = setInterval( () => this.getSongs(), 15000)
    }

    getSongs = () => {
      fetch('http://localhost:1400/lagu/auth/read/penyanyi', {
            method: 'GET',
            mode: "cors",       
            headers: {
              'Content-Type': 'application/json',
              'Authorization': cookies.get('token_premium')
          }
          
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
          let temp = []
          data.forEach((x, i) => {
            temp.push([x.song_id, x.Judul])
          })
          this.setState({
            songs : temp
          });
        })
      }

    handleDelete = (indeks) => {
      let dataToSend = JSON.stringify({"song_id": indeks });
      fetch('http://localhost:1400/lagu/auth/delete', {
            method: 'DELETE',
            mode: "cors",
            body: dataToSend,        
            headers: {
              'Content-Type': 'application/json',
              'Authorization': cookies.get('token_premium')
          }
          
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
          this.getSongs()
        })
    }

    handleEdit = (indeks, nama) => {
      let dataToSend = JSON.stringify({"song_id": indeks, "judul": nama });
      fetch('http://localhost:1400/lagu/auth/update/judul', {
            method: 'PUT',
            mode: "cors",
            body: dataToSend,        
            headers: {
              'Content-Type': 'application/json',
              'Authorization': cookies.get('token_premium')
          }
          
        }).then((response) => {
          return response.json();
        })
        .then((data) => {
          this.getSongs()
        })
    }

    handleEdit2 = (formData) => {
      axios.put('http://localhost:1400/lagu/auth/update/audio_path', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': cookies.get('token_premium')
        } 
      })
      .then(res => {
          console.log(res);
          console.log(res.data);
      }).catch(err => {
          console.log(err);
      })
    }

    handlePagination = (event,p) => {
      this.setState({
        page: p
      });
    }

    render() {
      let rowsPerPagination = 3
      let slicedArray = this.state.songs.slice((this.state.page-1)*rowsPerPagination, (this.state.page-1)*rowsPerPagination + rowsPerPagination)
      return (
        <ThemeProvider theme={theme}>
        <Container maxWidth={false}>
            <CssBaseline />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '75%',
                margin: '0 auto'
              }}
            >
              <Typography component="h1" variant="h4" sx={{marginTop: '20px', marginBottom: '10px', fontWeight: '700', textShadow: '1px 1px 9px black',}}>
                See and Edit Songs Here! 
              </Typography>
                {
                  slicedArray.map((item,index) => <Lagu handleDelete={this.handleDelete} handleEdit={this.handleEdit} handleEdit2={this.handleEdit2} songs= {this.state.songs} nama= {item[1]} indeks = {item[0]} key = {index}></Lagu>)
                }
                <Pagination onChange = {this.handlePagination} count={Math.ceil(this.state.songs.length/rowsPerPagination)} color="primary" sx = {{marginTop: '50px', marginBottom:'20px'}} />
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default DaftarLagu;
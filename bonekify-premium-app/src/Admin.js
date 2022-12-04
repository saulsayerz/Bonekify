import React, { Component } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Subs from './templates/Subs';
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

class Admin extends Component{
    constructor(props){
      super(props)
      this.state = {
        subs : [],
        page : 1
      }
      this.handleAccept = this.handleAccept.bind(this);
      this.handleReject = this.handleReject.bind(this);
      this.handlePagination = this.handlePagination.bind(this);
      this.getSubs = this.getSubs.bind(this)
    }

    componentDidMount(){
      this.getSubs()
      this.addInterval = setInterval( () => this.getSubs(), 15000)
    }

    getSubs = () => {
      fetch('http://localhost:1400/subscription/pending', {
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
            temp.push([x.subscriber_id, x.creator_id])
          })
          this.setState({
            subs: temp
          });
        })
      }
      
      handleAccept = (creator_id, subscriber_id) => {
        let dataToSend = JSON.stringify({"creator_id": creator_id, "subscriber_id": subscriber_id });
        fetch('http://localhost:1400/subscription/setstatus/accept', {
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
            this.getSubs()
          })
      }
  
      handleReject = (creator_id, subscriber_id) => {
        let dataToSend = JSON.stringify({"creator_id": creator_id, "subscriber_id": subscriber_id });
        fetch('http://localhost:1400/subscription/setstatus/reject', {
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
            this.getSubs()
          })
      }

    handlePagination = (event,p) => {
      this.setState({
        page: p
      });
    }

    render() {
      let rowsPerPagination = 3
      let slicedArray = this.state.subs.slice((this.state.page-1)*rowsPerPagination, (this.state.page-1)*rowsPerPagination + rowsPerPagination)
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
              <Typography component="h1" variant="h4" sx={{marginTop: '60px', fontWeight: '700', textShadow: '1px 1px 9px black',}}>
                Subscriptions Requests! 
              </Typography>
                {
                  slicedArray.map((item,index) => <Subs handleAccept={this.handleAccept} handleReject={this.handleReject} nama= {item} key = {index}></Subs>)
                }
                <Pagination onChange = {this.handlePagination} count={Math.ceil(this.state.subs.length/rowsPerPagination)} color="primary" sx = {{marginTop: '50px', marginBottom:'20px'}} />
            </Box>
        </Container>
        </ThemeProvider>
      )
    }
  }
  
export default Admin;
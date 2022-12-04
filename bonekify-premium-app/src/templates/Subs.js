import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
    // mode: 'dark',
  },
});

export default function Subs(props) {

  return (
    <ThemeProvider theme={theme}>   
        <Grid container spacing={2} sx = {{boxShadow: 3, borderRadius: 3 , marginTop:'50px', paddingBottom:'15px', textAlign: 'center', alignItems: 'center', background: 'linear-gradient(30deg, rgba(60,99,96,1) 35%, rgba(61,103,72,1) 100%)'}}>
            <Grid item xs={2}>
            <Button color="error"
                  type="submit"
                  onClick = {() => props.handleReject(props.nama[1], props.nama[0])}
                  variant="contained"
                >
                  Reject
            </Button >
            </Grid>
            <Grid item xs={8}>
            <Card sx = {{borderRadius: 3, backgroundColor: 'transparent', boxShadow: 0}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'black'}}>
                        Subs ID:{props.nama[0]} | Creator ID: {props.nama[1]}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
            <Button color="success"
                  type="submit"
                  onClick = {() => props.handleAccept(props.nama[1], props.nama[0])}
                  variant="contained"
                >
                  Accept
            </Button >
            </Grid>
        </Grid>
    </ThemeProvider>
  );
}
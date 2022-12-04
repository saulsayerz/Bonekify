import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const theme = createTheme({
  palette: {

    primary: {
      main: '#656565',

    },
    secondary: {
      main: '#656565',
      contrastText: '#656565',
    },

    // mode: 'dark',
  },
});

export default function Lagu(props) {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      props.handleEdit(props.indeks,data.get('newName'))
      setOpen(false)
    }

    const handleSubmit2 = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      data.append('song_id', props.indeks)
      props.handleEdit2(data)
      setOpen2(false)
    }

  return (
    <ThemeProvider theme={theme}>   
        <Grid container spacing={2} sx = {{marginTop:'50px', paddingBottom:'15px', textAlign: 'center', alignItems: 'center', background: 'linear-gradient(30deg, rgba(60,99,96,1) 35%, rgba(61,103,72,1) 100%)', borderRadius: 3 , boxShadow: 3}}>
            <Grid item xs={2}>
            <Button color="error"
                  type="submit"
                  onClick = {() => props.handleDelete(props.indeks)}
                  variant="contained"
                >
                  Delete
            </Button >
            </Grid>
            <Grid item xs={8}>
                <Card sx = {{borderRadius: 2, backgroundColor: 'transparent', border: 'none', boxShadow: 0}}>
                    <CardContent>
                        <Typography sx={{ fontSize: 25, color: 'black'}}>
                        {props.nama}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
            <Button color="success"
                  type="submit"
                  onClick = {() => setOpen(true)}
                  variant="contained"
                  sx ={{marginBottom: '20px'}}
                >
                  Edit Name
            </Button >
            <Button color="success"
                  type="submit"
                  onClick = {() => setOpen2(true)}
                  variant="contained"
                >
                  Edit Audio
            </Button >
            </Grid>
            <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography component="h1" variant="h4" sx={{textAlign: 'center', marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 1px black', color: 'black'}}>
                New Name!
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="newName"
                  label="New Song Name"
                  name="newName"
                  autoFocus
                  sx = {{color: 'red'}}
                />
                <Button color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button >
                </Box>
        </Box>
      </Modal>
      <Modal
        open={open2}
        onClose={() => setOpen2(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography component="h1" variant="h4" sx={{textAlign: 'center', marginBottom: '20px', fontWeight: '700', textShadow: '1px 1px 1px black', color: 'black'}}>
                Update song!
              </Typography>
              <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 1 }}>
                <TextField
                  type = "file"
                  inputProps={{ accept: 'audio/wav, audio/mp3'}}
                  margin="normal"
                  fullWidth
                  id="audio_path"
                  name="audio_path"
                  autoFocus
                  sx = {{color: 'red'}}
                />
                <Button color="success"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button >
                </Box>
        </Box>
      </Modal>
        </Grid>
    </ThemeProvider>
  );
}
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #gray',
  boxShadow: 24,
  p: 5,
  borderRadius : '20px'
};


const BookingModal = ({open, handleClose, booking, value}) => {
    const {name, time} = booking;

    const handleBooking = e => {
        e.preventDefault();
        handleClose();
        alert('data going to successfully')
    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h4" component="h2" sx={{textAlign : 'center', color : '#5CE7ED'}}>
              {name}
            </Typography>
           <form onSubmit={handleBooking} style={{margin : '20px 0'}}>
                <TextField
                disabled
                sx={{width : '100%', my : 1}}
                label="Time"
                id="outlined-size-small"
                defaultValue={time}
                size="small"
                />
                <TextField
                sx={{width : '100%', my : 1}}
                label="Your Name"
                id="outlined-size-small"
                defaultValue='Your Name'
                size="small"
                />
                <TextField
                sx={{width : '100%', my : 1}}
                label="Your Email"
                id="outlined-size-small"
                defaultValue='Your Email'
                size="small"
                />
                <TextField
                sx={{width : '100%', my : 1}}
                label="Phone Number"
                id="outlined-size-small"
                defaultValue='Phone Number'
                size="small"
                />
                <TextField
                disabled
                sx={{width : '100%', my : 1}}
                label="Appointment Date"
                id="outlined-size-small"
                defaultValue={value.toDateString()}
                size="small"
                />
                <Button sx={{width : '100%', mt : 2, py : 1}} type='submit' variant='contained'>Submit</Button>
           </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;
import React, {useState} from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from '../../Hooks/UseAuth';

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

const BookingModal = ({open, handleClose, booking, date, setBookingSuccess}) => {

    const {name, time, price} = booking;
    const {user} = useAuth();

    const initializeInfo = {patientName : user.displayName, email : user.email, phone : ''}
    const [bookingInfo, setBookingInfo] = useState(initializeInfo);

    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = { ...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo);
    }

    const handleBooking = e => {
      const appointment = {
        ...bookingInfo,
        time,
        price,
        serviceName : name,
        date : date.toLocaleDateString()
      }
      //data send to server
      fetch('https://glacial-stream-07919.herokuapp.com/appointments', {
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(appointment)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          setBookingSuccess(true)
         
        }
      })
      handleClose();
        e.preventDefault();
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
                name="patientName"
                onBlur={handleOnBlur}
                defaultValue={user.displayName}
                size="small"
                />
                <TextField
                sx={{width : '100%', my : 1}}
                label="Your Email"
                id="outlined-size-small"
                name="email"
                onBlur={handleOnBlur}
                defaultValue={user.email}
                size="small"
                />
                <TextField
                sx={{width : '100%', my : 1}}
                label="Phone Number"
                id="outlined-size-small"
                name="phone"
                onBlur={handleOnBlur}
                defaultValue='Phone Number'
                size="small"
                />
                <TextField
                disabled
                sx={{width : '100%', my : 1}}
                label="Appointment Date"
                id="outlined-size-small"
                defaultValue={date.toDateString()}
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
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, value}) => {
    const {name, time, space} = booking;
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
        <>
            
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={4} sx={{p:3, textAlign: 'center'}} >
                <Typography variant='h5' sx={{fontWeight: 500, color : '#5CE7ED'}}>
                    {name}
                </Typography>
                <Typography variant='h6' sx={{py: 2}}>
                    {time}
                </Typography>
                <Typography variant='body1'>
                    {space} SPACE AVAILABLE
                </Typography>
                <Button onClick={handleOpen} variant="contained" sx={{backgroundColor : '#5CE7ED', mt: 2}}>BOOK APPOINTMENT</Button>
            </Paper>     
        </Grid>
        <BookingModal
        value={value}
        booking={booking}
        open={open}
        handleClose={handleClose}
        >
        </BookingModal>
        </>
    );
};

export default Booking;
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id : 1,
        name : 'Teeth Orthodontics',
        time : '8:00am - 9:00am',
        space : '10'
    },
    {
        id : 2,
        name : 'Cosmetic Dentistry',
        time : '10:05am - 11:30am',
        space : '10'
    },
    {
        id : 3,
        name : 'Teeth Cleaning',
        time : '5:00pm - 6:30pm',
        space : '10'
    },
    {
        id : 4,
        name : 'Cavetiy Protection',
        time : '7:00pm - 8:30pm',
        space : '10'
    },
    {
        id : 5,
        name : 'Teeth Orthodontics',
        time : '8:00am - 9:00',
        space : '10'
    },
    {
        id : 6,
        name : 'Teeth Orthodontics',
        time : '8:00am - 9:00',
        space : '10'
    }
]

const AvailableAppointment = ({value, setValue}) => {
    return (
        <Container sx={{my : 5}}>
            <Typography variant='h4' sx={{textAlign: 'center', fontWeight: 500, color : '#5CE7ED', mb: 5}}>
                Available Appointment on {value.toDateString()}
            </Typography>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    bookings.map(booking => <Booking
                    key={booking.id}
                    booking={booking}
                    value={value}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import chair from '../../images/chair.png';
import { Container, Typography } from '@mui/material';
import Calender from '../Calender/Calender';

const AppointmentHeader = ({value, setValue}) => {
    return (
       <Container>
            <Box sx={{ width: '100%', mt : '70px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={6}>
            <Typography variant='h4' style={{marginLeft : '80px' }}>
                Appointment
            </Typography>
            <Calender value={value} setValue={setValue}></Calender>
          </Grid>
          <Grid item xs={6} md={6}>
            <img src={chair} style={{width : '90%'}} alt="" />
          </Grid>
        </Grid>
      </Box>
       </Container>
    );
};

export default AppointmentHeader;
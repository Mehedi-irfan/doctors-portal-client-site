import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import doctorImg from '../../images/doctor.png';
import appointmentBg from '../../images/appointment-bg.png';
import { Button, Container, Typography } from '@mui/material';

const appointBanner = {
    background : `url(${appointmentBg})`,
    backgroundColor : 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode : 'darken, luminosity',
    marginTop : '200px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appointBanner} sx={{ width: '100%', marginTop : '100px', marginBottom : '50px' }}>
        <Container>
        <Grid container rowSpacing={1} sx={{alignItems : 'center'}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <img src={doctorImg} style={{width : '550px', marginTop : '-130px'}} alt="" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='h6' sx={{color : '#5CE7ED'}}>
                APPOINTMENT
            </Typography>
            <Typography variant='h3' sx={{color : 'white', mt: 2}}>
                Make an appointment Today
            </Typography>
            <Typography variant='body1' sx={{my : 4, color : 'white'}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi sit distinctio officiis delectus magnam earum illo illum fugiat cumque labore!
            </Typography>
            <Button  variant="contained" style={{ backgroundColor : '#5CE7ED'}}>Learn More</Button>
          </Grid>
        </Grid>
        </Container>
      </Box>
    );
};

export default AppointmentBanner;
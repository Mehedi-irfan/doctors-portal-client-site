import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../images/chair.png'
import bg from '../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background : `url(${bg})`
    
}
const verticalCenter = {
    display : 'flex',
    alignItems : 'center',
    height : 400
}

const Banner = () => {
    return (
            <Box style={bannerBg} sx={{ flexGrow: 1 }}>
                <Container>
            <Grid container style={verticalCenter} spacing={2}>
            <Grid item xs={12} md={6}>
                <Typography variant='h3'>
                Your New Smile
                <br />
                Starts Here
            </Typography>
            <Typography variant='body1' sx={{ my : 3}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda provident rem nesciunt sequi sint perspiciatis repellat eaque. Autem tempora soluta necessitatibus aliquid odit nam, officia odio iusto obcaecati animi a!
            </Typography>
            <Button variant="contained" style={{ backgroundColor : '#5CE7ED'}}>Get Appointment</Button> 
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={chair} style={{width : '70%'}} alt="" />
          </Grid>
          
        </Grid>
        </Container>
      </Box>
    );
};

export default Banner;
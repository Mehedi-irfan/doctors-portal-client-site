import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluride from '../../images/fluoride.png';
import cavetiy from '../../images/cavity.png';
import whiteing from '../../images/whitening.png';


const services = [
    {
        name : 'Fluride Tretment',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam molestiae debitis, quas corporis omnis facilis doloribus corrupti quam facere.',
        img : fluride
    },
    {
        name : 'Cavetiy Filling',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam molestiae debitis, quas corporis omnis facilis doloribus corrupti quam facere.',
        img : cavetiy
    },
    {
        name : 'Teath Whiteing',
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam molestiae debitis, quas corporis omnis facilis doloribus corrupti quam facere.',
        img : whiteing
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, py: 5, textAlign : 'center' }}>
        <Container>
            <Typography variant='h6' sx={{color : '#5CE7ED'}}>
                OUR SERVICES
            </Typography>
            <Typography variant='h4' sx={{py:2}}>
                Services We Provide
            </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {
              services.map(service => <Service
                key={service.name}
                service={service}
              ></Service>)
          }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;
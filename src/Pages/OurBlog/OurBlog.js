import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const OurBlog = () => {
    return (
        <Container sx={{ width: '100%', my : 5 }}>
            <Typography variant='h6' sx={{color : '#5CE7ED', textAlign : 'center', mt: 5}}>
                OUR BLOG
            </Typography>
            <Typography variant='h3' sx={{textAlign : 'center'}}>
                FROM OUR BLOG NEWS
            </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{my : 4}}>
        <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{p : 4}}>
            <Typography variant='h6' sx={{color : '#5CE7ED'}}>
                Rashed Kabir
            </Typography>
            <Typography variant='body1' sx={{py : 2}}>
                22 Aug 2018
            </Typography>
            <Typography variant='h5'>
                Check at least a doctor in a year for your teeth
            </Typography>
        </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{p : 4}}>
            <Typography variant='h6' sx={{color : '#5CE7ED'}}>
                Rashed Kabir
            </Typography>
            <Typography variant='body1' sx={{py : 2}}>
                22 Aug 2018
            </Typography>
            <Typography variant='h5'>
                Check at least a doctor in a year for your teeth
            </Typography>
        </Paper>
        </Grid>
        <Grid item xs={6} md={4}>
        <Paper elevation={3} sx={{p : 4}}>
            <Typography variant='h6' sx={{color : '#5CE7ED'}}>
                Rashed Kabir
            </Typography>
            <Typography variant='body1' sx={{py : 2}}>
                22 Aug 2018
            </Typography>
            <Typography variant='h5'>
                Check at least a doctor in a year for your teeth
            </Typography>
        </Paper>
        </Grid>
      </Grid>
    </Container>
    );
};

export default OurBlog;
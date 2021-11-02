import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import dental from '../../images/treatment.png'

const Dental = () => {
    return (
        <Container>
            <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{alignItems : 'center'}}>
                <Grid item xs={6}>
                <img src={dental} style={{width : '100%', height : '500px'}} alt="" />
                </Grid>
                <Grid item xs={6}>
                <Typography variant='h3'>
                        Excepetional Dental Care, On Your terms
                </Typography>
                <Typography variant='body1' color="text.secondary" sx={{my : 4}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis ea quas iste dolores, recusandae quae iure, ipsum natus repudiandae architecto quod alias rem? Est vero unde dignissimos obcaecati adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis ea quas iste dolores, recusandae quae iure, ipsum natus repudiandae architecto quod alias rem? Est vero unde dignissimos obcaecati adipisci.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, facilis ea quas iste dolores, recusandae quae iure, ipsum natus repudiandae architecto quod alias rem? Est vero unde dignissimos obcaecati adipisci.
                </Typography>
                <Button  variant="contained" style={{ backgroundColor : '#5CE7ED'}}>Learn More</Button>
                </Grid>
            </Grid>
            </Box>
        </Container>
    );
};

export default Dental;
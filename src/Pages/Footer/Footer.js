import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import footerBackground from '../../images/footer-bg.png';

const Footer = () => {
    const footerBg = { 
        background : `url(${footerBackground})`
    }
    return (
        <Box style={footerBg} sx={{mt : 5, py : 4}}>
            <Container>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1, mt : 5}}>Emergency Dental Care</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check Up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Tretment of Personal Disese</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Tooth Extraction</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography variant='h6' sx={{color : '#5CE7ED', mb : 2}}>
                            Services
                        </Typography>
                    <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Emergency Dental Care</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check Up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Tretment of Personal Disese</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Tooth Extraction</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <Typography variant='h6' sx={{color : '#5CE7ED', mb : 2}}>
                            Our Health
                        </Typography>
                    <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Emergency Dental Care</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check Up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Tretment of Personal Disese</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Tooth Extraction</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                        <Typography variant='body1' sx={{color : 'gray', mb : 1}}>Check up</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                    <Typography variant='h6' sx={{color : '#5CE7ED', mb : 2}}>
                            Our Address
                        </Typography>
                        <Typography  variant='body1' sx={{color : 'gray', mb : 1}}>New York - 100010 Hudson <br /> yards</Typography>
                        <Typography  variant='body1' sx={{color : 'gray', mb : 1, mt : 4}}>Call Now</Typography>
                        <Button variant='contained'>+008 0124354</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
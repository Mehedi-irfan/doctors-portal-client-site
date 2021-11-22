import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import people1 from '../../images/people-1.png'
import people2 from '../../images/people-2.png'
import people3 from '../../images/people-3.png'

const Testimonial = () => {
    return (
        <Container>
            <Typography variant='h6' sx={{color : '#5CE7ED'}}>
                TESTIMONIAL
            </Typography>
            <Typography variant='h3'>
                What's Our Patients <br /> Sayes
            </Typography>
        <Grid container rowSpacing={3} sx={{my : 4}} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
          <Grid item xs={6} sm={6} md={4} sx={{boxShadow: 2, py : 3, px : 3, borderRadius: '5px'}}>
            <Typography variant='body1' sx={{textAlign : 'justify', color : 'gray'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum distinctio commodi, odio facere officia, quo itaque magnam aut, corporis facilis laboriosam velit earum consectetur dolor alias eius totam sequi!
            </Typography>
            <Grid sx={{display : 'flex', alignItems: 'center', mt: 3}}>
                <Grid item>
                    <img src={people1} style={{width : '60%', marginLeft: '15px'}} alt="" />
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{fontSize : '19px', color : '#5CE7ED'}}>
                        Winson Henry
                    </Typography>
                    <Typography variant='body1' sx={{color : 'gray'}}>
                        Califonia
                    </Typography>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={4} sx={{boxShadow: 2, py : 3, px : 3, borderRadius: '5px'}}>
            <Typography variant='body1' sx={{textAlign : 'justify', color : 'gray'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum distinctio commodi, odio facere officia, quo itaque magnam aut, corporis facilis laboriosam velit earum consectetur dolor alias eius totam sequi!
            </Typography>
            <Grid sx={{display : 'flex', alignItems: 'center', mt: 3}}>
                <Grid item>
                    <img src={people2} style={{width : '60%', marginLeft: '15px'}} alt="" />
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{fontSize : '19px', color : '#5CE7ED'}}>
                        Winson Henry
                    </Typography>
                    <Typography variant='body1' sx={{color : 'gray'}}>
                        Califonia
                    </Typography>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={4} sx={{boxShadow: 2, py : 3, px : 3, borderRadius: '5px'}}>
            <Typography variant='body1' sx={{textAlign : 'justify', color : 'gray'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolorum distinctio commodi, odio facere officia, quo itaque magnam aut, corporis facilis laboriosam velit earum consectetur dolor alias eius totam sequi!
            </Typography>
            <Grid sx={{display : 'flex', alignItems: 'center', mt: 3}}>
                <Grid item>
                    <img src={people3} style={{width : '60%', marginLeft: '15px'}} alt="" />
                </Grid>
                <Grid item>
                    <Typography variant='h6' sx={{fontSize : '19px', color : '#5CE7ED'}}>
                        Winson Henry
                    </Typography>
                    <Typography variant='body1' sx={{color : 'gray'}}>
                        Califonia
                    </Typography>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
};

export default Testimonial;
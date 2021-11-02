import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const {name, img, desc} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} sx={{my: 5}} >
             <Card sx={{ minWidth: 275, py : 3, border : 0, boxShadow: 0 }}>
             <CardMedia
        component="img"
        style={{width : 'auto', height : 120, margin : '0 auto' }}
        image={img}
        alt="Paella dish"
        
      />
      <CardContent sx={{textAlign : 'center'}}>
        <Typography variant="h5" component="div" sx={{mb : 3 , mt: 2}}>
         {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {desc}
        </Typography>
      </CardContent>
    </Card>  
        </Grid>
    );
};

export default Service;
import { Button, Container, Typography } from '@mui/material';
import  {Box}  from '@mui/system';
import React from 'react';

const ContactUs = () => {
    const contactBackground = {
        backgroundColor : 'rgba(45, 58, 74, 0.9)',
    }
    return (
       <Box sx={{my : 5, py : 5}} style={contactBackground}>
           <Typography variant='h6' sx={{color : '#5CE7ED', textAlign : 'center'}}>
               CONTACT US
           </Typography>
           <Typography variant='h4' sx={{color : 'white', textAlign : 'center'}}>
               Always Connect With Us
           </Typography>
           <form style={{textAlign : 'center', padding : '20px 0px'}}>
                <input type="email" style={{width : '60%', padding : '15px 5px', margin : '10px', border : 'none'}} placeholder='Enter Your Email' />
                <br />
                <input  style={{width : '60%', padding : '15px 5px', margin : '10px', border : 'none'}}  type="text" placeholder='Enter Your Subject' />
                <br />
                <textarea  style={{width : '60%', padding : '15px 5px', margin : '10px', border : 'none'}}  placeholder='Enter some message' />
                <br />
                <Button style={{width : '60%', padding : '15px 5px', margin : '10px', border : 'none'}}  type='submit' variant='contained' sx={{margin : '0 auto'}}>Submit</Button>
           </form>
       </Box>
    );
};

export default ContactUs;
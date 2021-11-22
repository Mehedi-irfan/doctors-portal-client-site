import React, {useState, useEffect} from 'react';
import {CircularProgress, Grid} from '@mui/material';
import Doctor from './Doctor/Doctor';

const OurDoctor = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('https://glacial-stream-07919.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])

    return (
        <div style={{textAlign : 'center', margin : '100px 0px'}}>
            <h1>Our Doctors : {doctors.length}</h1>
               {
               doctors ? <CircularProgress></CircularProgress> :
               <Grid container Spacing={2}>
                   {
                       doctors.map(doctor => <Doctor
                       key={doctor._id}
                       doctor={doctor}
                       ></Doctor>)
                   }
                </Grid>}
        </div>
    );
};

export default OurDoctor;
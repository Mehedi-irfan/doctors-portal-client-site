import React from 'react';
import { Grid } from '@mui/material';
import Calender from '../Calender/Calender';
import Appointments from '../Appointments/Appointments';

const DashnoardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6} md={4}>
           <Calender
           date={date}
            setDate={setDate}
           ></Calender>
        </Grid>
        <Grid item xs={6} md={8}>
           <Appointments date={date}></Appointments>
        </Grid>
    </Grid>
    );
};

export default DashnoardHome;
import React from 'react';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import Navigation from '../Navigation/Navigation';

const Appointment = () => {
    const [value, setValue] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader value={value} setValue={setValue}></AppointmentHeader>
            <AvailableAppointment value={value} setValue={setValue}></AvailableAppointment>
        </div>
    );
};

export default Appointment;
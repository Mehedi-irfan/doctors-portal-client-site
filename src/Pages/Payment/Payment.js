import React, { useState } from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from '../CheckOutForm/CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51JxOxXHW6lPEXcqVdFsgvqXQNCGuZejPC7JxN3WFugXmOxan1lN8Xr7jvTPybrkSAAU5QOozHUksdAO4DUWZ1Ggd00OWKbsJPe');

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointments, setAppointments] = useState({});
    fetch(`https://glacial-stream-07919.herokuapp.com/appointments/${appointmentId}`)
    .then(res => res.json())
    .then(data => setAppointments(data))
    return (
        <div>
            <h2>Payment for :- {appointments.patientName} for {appointments.serviceName}</h2>
            <h3>Price :- ${appointments.price}</h3>
            {appointments?.price && <Elements stripe={stripePromise}>
                <CheckOutForm
                appointments={appointments}
                ></CheckOutForm>
            </Elements>}
        </div>
    );
};

export default Payment;
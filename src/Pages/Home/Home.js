import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Dental></Dental>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;
import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Dental from '../Dental/Dental';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import OurBlog from '../OurBlog/OurBlog';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import Testimonial from '../Testimonials/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Dental></Dental>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <OurBlog></OurBlog>
            <OurDoctor></OurDoctor>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;
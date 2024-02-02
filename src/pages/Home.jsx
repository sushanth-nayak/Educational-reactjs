import React, { Fragment } from 'react';
import AboutUs from '../components/About-us/AboutUs';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Company from '../components/Company/Company';
import Courses from '../components/Courses/Courses';
import FreeCourse from '../components/FreeCourse/FreeCourse';
import HeroSection from '../components/HeroSection/HeroSection';
import Newsletter from '../components/Newsletter/Newsletter';
import Testimonial from '../components/Testimonial/Testimonial';

const Home = () => {
    return (
        <Fragment>
            <HeroSection />
            <Company />
            <AboutUs />
            <Courses />
            <ChooseUs />
            <FreeCourse />
            <Testimonial />
            <Newsletter />
        </Fragment>
    );
};

export default Home;
import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Experts from './Experts/Experts';
import AboutUs from './AboutUs/AboutUs';
import OurSpeciallty from './OurSpeciallty/OurSpeciallty';

const Home = () => {
    useTitle('Home/BiTx Photography')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <AboutUs></AboutUs>
            <OurSpeciallty></OurSpeciallty>
            <Experts></Experts>
            <About></About>
        </div>
    );
};

export default Home;
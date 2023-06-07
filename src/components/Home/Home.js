import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import Experts from './Experts/Experts';
import AboutUs from './AboutUs/AboutUs';
import OurSpeciallty from './OurSpeciallty/OurSpeciallty';
import Review from '../Review/Review';
import Animated from '../Animated/Animated';
import MakeYourHome from '../MakeYourHome/MakeYourHome';

const Home = () => {
    useTitle('Home/BiTx Photography')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <MakeYourHome></MakeYourHome>
            <Animated></Animated>
            <AboutUs></AboutUs>
            <OurSpeciallty></OurSpeciallty>
            <Experts></Experts>
            <Review></Review>
            <About></About>
        </div>
    );
};

export default Home;
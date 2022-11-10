import React from 'react';
import useTitle from '../../hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    useTitle('Home/BiTx Photography')
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
        </div>
    );
};

export default Home;
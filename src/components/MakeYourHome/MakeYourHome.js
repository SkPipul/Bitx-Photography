import React from 'react';
import Lottie from "lottie-react";
import MyHome from './MakeHome.json'

const MakeYourHome = () => {
    return (
        <div className='px-10 mt-20 mb-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
            <Lottie className='' animationData={MyHome}/>
            <h3 className='md:text-4xl text-2xl font-extrabold lg:mt-40 text-center'>Make Your Home Photography with our experts</h3>
            </div>
        </div>
    );
};

export default MakeYourHome;
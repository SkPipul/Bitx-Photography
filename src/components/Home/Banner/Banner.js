import React from 'react';
import banner from "./banner.json"
import './Banner.css'
import Lottie from "lottie-react";


const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:pl-16 pl-4'>
            <div>
            <h1 className='lg:text-6xl text-4xl font-bold text-green-500 lg:mt-28 mt-6'>
                 Our photographer Is Waiting For Your Service
             </h1>
             <p className='mt-3 text-lg text-gray-500'>I am a professional photographer and I used to do Photography in many kinds of wedding and beautiful places</p>
            </div>
            <div>
            <Lottie className='w-[40%] mx-auto' animationData={banner}/>
            </div>
        </div>
    );
};

export default Banner;
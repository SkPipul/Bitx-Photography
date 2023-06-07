import React from 'react';
import img from '../../assets/animated.png'

const Animated = () => {
    return (
        <div className='px-10 mt-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
            <img className='mx-auto animate-pulse w-[80%]' src='https://i.pinimg.com/originals/49/b3/d6/49b3d6f24c50bf4cfff192da9c59308e.png' alt=''/>
            <img className='w-[50%] mx-auto animate-spin-slow mt-14' src={img} alt=''/>
            <img className='w-[50%] mx-auto mt-16 animate-pulse' src='https://pngimg.com/d/photo_camera_PNG101598.png' alt=''/>
        </div>
        </div>
    );
};

export default Animated;
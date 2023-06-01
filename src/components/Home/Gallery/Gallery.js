import React from 'react';
import img1 from '../../../assets/galler-1.jpg'
import img2 from '../../../assets/gallery-2.jpg'
import img3 from '../../../assets/gallery-3.jpg'
import img4 from '../../../assets/gallery-4.jpg'
import img6 from '../../../assets/gallery-6.jpg'
import img8 from '../../../assets/gallery-8.jpg'

const Gallery = () => {
    return (
        <div className='mt-10'>
            <h3 className='text-center font-extrabold text-5xl mb-12'>Our Samples</h3>
            <div className='lg:flex '>
                <img src={img1} className='lg:w-[400px] w-full lg:border-4 lg:my-4' alt=''></img>
                <div className='border-4'>
                <img src={img2} className='lg:w-[320px] w-full' alt=''></img>
                <img src={img3} className='lg:w-[320px] w-full' alt=''></img>
                </div>
                <div className='border-4'>
                <img src={img6} className='lg:w-[320px] w-full' alt=''></img>
                <img src={img8} className='lg:w-[320px] w-full' alt=''></img>
                </div>
                <img className='lg:w-[400px] w-full lg:border-4 lg:my-4' src={img4} alt=''></img>
            </div>
        </div>
    );
};

export default Gallery;
import React from 'react';
import img1 from '../../../assets/photo-1480365501497-199581be0e66.avif'
import img2 from '../../../assets/photo-1573320286044-b43a4168fb40.avif'
import img3 from '../../../assets/photo-1582994254571-52c62d96ebab.avif'
import img4 from '../../../assets/photo-1612017071647-4466ded889b8.avif'
import './Banner.css'


const Banner = () => {
    return (
        <div className="carousel w-[90%] mx-auto">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img2} className="w-full h-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-orange-500'>
                        Wedding Photography <br />
                        Is Waiting For Your <br />
                        Service
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl text-white'>I am a professional photographer and  I used to do Photography in many kinds of wedding and beautiful places</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img1} className="w-full h-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-sky-200'>
                        Wedding Photography <br />
                        Is Hiring For Your <br />
                        Service
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl text-white'>I am a professional photographer and  I used to do Photography in many kinds of wedding and beautiful places</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={img3} className="w-full h-full rounded-xl" alt='' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-orange-500'>
                        Wedding Photography <br />
                        Is Hiring For Your <br />
                        Service
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl text-white'>I am a professional photographer and  I used to do Photography in many kinds of wedding and beautiful places</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full h-full rounded-xl" alt='' />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-orange-500'>
                        Wedding Photography <br />
                        Is Hiring For Your <br />
                        Service
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl text-white'>I am a professional photographer and  I used to do Photography in many kinds of wedding and beautiful places</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
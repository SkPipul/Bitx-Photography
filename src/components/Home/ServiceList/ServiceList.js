import React from 'react';

const ServiceList = ({service}) => {
    const {img, title, description, price} = service;
    return (
        <div className="hero py-2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="w-3/5 rounded-lg shadow-2xl" alt=''/>
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h3 className='text-2xl font-semibold mt-3'>Price: <span className='text-orange-600'>${price}</span></h3>
                    <p className="py-6">{description}</p>
                    <button className="btn border-none px-8 bg-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
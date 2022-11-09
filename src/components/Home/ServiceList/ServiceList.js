import React from 'react';
import { Link } from 'react-router-dom';

const ServiceList = ({ service }) => {
    const { _id, img, title, description, price } = service;
    return (
        <div className="hero py-2 bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="w-3/5 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h3 className='text-2xl font-semibold mt-3'>Price: <span className='text-orange-600'>${price}</span></h3>
                    <p className="py-6">{description.slice(0, 100)}...</p>
                    <Link to={`/allServices/${_id}`}>
                        <button className="btn border-none px-8 bg-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;
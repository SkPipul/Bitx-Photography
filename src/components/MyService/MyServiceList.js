import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const MyServiceList = ({ service }) => {
    const { _id, price, img, title, description } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <PhotoProvider>
                    <PhotoView src={img}>

                        <img src={img} alt="" />

                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <h4 className='text-xl font-semibold'>Price: <span className='text-orange-600'>${price}</span></h4>
                <p>{description.slice(0, 100)}...</p>
                <div className="card-actions">
                    <Link to={`/allServices/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyServiceList;
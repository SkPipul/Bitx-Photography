import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const { title, img, description, price } = useLoaderData();
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-semibold">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h4 className='text-xl font-semibold'>Price: <span className='text-orange-600'>${price}</span></h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Details;
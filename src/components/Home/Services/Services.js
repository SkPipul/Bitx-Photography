import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceList from '../ServiceList/ServiceList';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='text-5xl font-mono font-bold'>This is our Photography service</h2>
                <p className='mt-2'>You can see all the services and details. Please make sure to give review in our review section</p>
            </div>
            {
                services.slice(0, 100).map( service => <ServiceList
                    key={service._id}
                    service={service}
                ></ServiceList>)
            }
            <div className='flex items-center justify-center mt-10'>
                <button className='btn bg-orange-600 border-none px-8'><Link to='/myservice'>See all</Link></button>
            </div>
        </div>
    );
};

export default Services;
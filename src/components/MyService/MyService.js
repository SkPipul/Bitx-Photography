import React, { useEffect, useState } from 'react';
import MyServiceList from './MyServiceList';

const MyService = () => {
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setAllService(data))
    },[])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-24'>
            {
                allService.map(service => <MyServiceList
                    key={service._id}
                    service={service}
                ></MyServiceList>)
            }
        </div>
    );
};

export default MyService;
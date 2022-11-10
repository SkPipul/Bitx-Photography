import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import MyServiceList from './MyServiceList';

const MyService = () => {
    const [allService, setAllService] = useState([]);
    useTitle('My Service/BiTx Photography')

    useEffect(() => {
        fetch('https://bitx-photography-server.vercel.app/allServices')
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
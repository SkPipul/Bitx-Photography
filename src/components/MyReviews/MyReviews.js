import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { AiFillDelete } from 'react-icons/ai';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data)
                console.log(data);
            })
    }, [user.email])

    return (
        <div className='mx-[120px] mb-8'>
            <h1 className='text-3xl font-mono text-red-500 font-bold mx-[240px] my-4'>Total reviews {reviews.length}</h1>
            <table className="table w-3/4">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => {
                            return <tr>
                                <td>
                                    
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={review.url} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{review.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {review.email}
                                    <br />
                                </td>
                                <td>{review.review}</td>
                                <th>
                                        <label>
                                            <button className='btn btn-ghost'><AiFillDelete className='text-2xl text-red-500'></AiFillDelete></button>
                                        </label>
                                    </th>
                            </tr>
                        })
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyReviews;
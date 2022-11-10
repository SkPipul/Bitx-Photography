import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Details = () => {
    const { _id, title, img, description, price } = useLoaderData();
    console.log(img)
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?url=${img}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data)
            console.log(data);
        })
        .catch(err => console.error(err))
    }, [])

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const reviewItem = {
            name: form.name.value,
            email: form.email.value,
            url: form.url.value,
            review: form.review.value
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
                if (data.acknowledged) {
                    swal("Thank You!", "Your review is taken successfully", "success");
                }
            })
            .catch(err => console.error(err));
    }

    
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mx-[100px]'>

            <div className="card w-full bg-base-100 shadow-xl">
                <figure className=''><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <h4 className='text-xl font-semibold'>Price: <span className='text-orange-600'>${price}</span></h4>
                    <p>{description}</p>
                </div>
            </div>

            {/* table */}
            <div className="overflow-x-auto w-full">
                <h1 className='text-3xl font-mono font-semibold text-red-500 text-center'>Total number of Review {reviews.length}</h1>
                <table className="table w-full">
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
                                  <br/>
                                </td>
                                <td>{review.review}</td>
                              </tr>
                            })
                        }
                    </tbody>
                    
                </table>
            </div>

            {
                user?.email ?
                <>
                <form onSubmit={handleReview} className='my-12'>
                <div className='grid grid-cols-1 gap-3'>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Email" className="input input-bordered w-full" />
                    <input name='url' type="text" placeholder={img} className="input input-bordered w-full" defaultValue={img} />
                    <input name='review' type="text" placeholder="Review message" className="input input-bordered w-full" />
                </div>
                <input className='btn bg-green-500 border-none mt-4' type="submit" value="Add Review" />
            </form>
                </>
            :
                <h2 className='text-3xl font-mono font-bold text-red-500 my-12 text-center'>!You have to login for giving reviews here</h2>
            }
        </div>
    );
};

export default Details;
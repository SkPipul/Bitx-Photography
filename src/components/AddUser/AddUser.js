import React from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useTitle from '../../hooks/useTitle';


const AddUser = () => {
    const navigate = useNavigate();
    useTitle('Add User/BiTx Photography')

    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const service = {
            title: form.title.value,
            price: form.price.value,
            url: form.url.value,
            description: form.description.value
        }
        fetch('https://bitx-photography-server.vercel.app/allServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset();
            navigate('/myservice')

            if(data.acknowledged){
                swal("Good job!", "User added successfully", "success");
            }
            else{
                swal("Sorry!", "User not added", "error");
            }
        })
        .catch(err => {
            console.error(err)
            if(err){
                swal("Sorry!", "User not add", "error");
            }
        })
    }


    return (
        <form onSubmit={handleAddUser} className='mx-[400px] my-12'>
            <div className='grid grid-cols-1 gap-3'>
                <input name='title' type="text" placeholder="Title/Service name" className="input input-bordered w-full max-w-xs" required/>
                <input name='price' type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" required/>
                <input name='url' type="text" placeholder="Image url" className="input input-bordered w-full max-w-xs" required/>
                <textarea name='description' className="textarea textarea-bordered w-3/4" placeholder="Description. You can add only 100 words"></textarea>
            </div>
            <input className='btn bg-orange-600 border-none mt-4' type="submit" value="Add User" />
        </form>
    );
};

export default AddUser;
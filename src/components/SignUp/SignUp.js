import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    useTitle('Sign Up/BiTx Photography')

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/')
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Signup now!</h1>
                    <p className="py-6">You can create a new account by provide your name, email and password</p>
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                            <p className='mt-2'>Already Have an account? <Link className='font-semibold text-orange-600' to='/login'>Login</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>SignUp</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
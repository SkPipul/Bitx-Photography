import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-primary">Login now!</h1>
                    <p className="py-6">You should provide a valid email and password for login</p>
                </div>
                <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
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
                            <label className="label">
                                <a href="" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center'>New to BiTx ? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
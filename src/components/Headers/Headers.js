import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import header from "./header.json"
import Lottie from "lottie-react";

const Headers = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/myservice'>My Service</Link></li>
        <li className='font-semibold'><Link to='/adduser'>Add Service</Link></li>
        <li className='font-semibold'><Link to='/myReviews'>My Reviews</Link></li>
        {
            user?.email ?
                <> 
                
                <li className='font-semibold'><Link onClick={handleLogOut}>Logout</Link></li>
                    
                </>
                :
                <> <li className='font-semibold'><Link to='/login'>Login</Link></li>
                </>
        }
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
    </>

    return (
        <div className="navbar h-20 mb-12 bg-base-100">
            <div className="navbar-start ml-6">
            <Lottie className='w-[60px]' animationData={header}/>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl">
                    <h2 className='text-2xl font-sans font-bold'><span className='text-orange-500'>BiTx </span> Photography</h2>
                </Link>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Headers;
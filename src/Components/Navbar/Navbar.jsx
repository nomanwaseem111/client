import React from 'react'
import {

    Link
} from "react-router-dom";
import { GlobalContext } from '../../Context';
import { useContext } from "react";
const Navbar = () => {
   
    let { state, dispatch } = useContext(GlobalContext);

   
    return (
        <>
            <div className='parent'>
                <div className='child-1'>
                    <h2 className='logo'>{state?.user?.firstName} {state?.user?.lastName}</h2>

                </div>
                <div className='child-2'>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className='link'>About</Link>
                            </li>
                            <li>
                                <Link to="/profile" className='link'>Profile</Link>
                            </li>
                            <li>
                                <Link to="/weather" className='link'>WeatherCard</Link>
                            </li>
                            <li>
                                <Link to="/signup" className='link'>Signup</Link>
                            </li>
                            <li>
                                <Link to="/login" className='link'>Login</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar
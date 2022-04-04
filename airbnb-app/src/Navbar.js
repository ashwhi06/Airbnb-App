import React from 'react';
import logo from './airbnb-logo.png'


export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt='AirBnB Logo' className='nav--logo'/>
        </nav>
    )
}
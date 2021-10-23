import React from 'react';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {

        const history = useHistory()

    const checkoutService = () => {
        history.push('/testimonials')
    }
    return (
        <div className='banner'>
            <div className='text-white banner-text'>
            <h1>Welcome in Our clinik!</h1>
            <p>We are here to serve everyone fully.To ensure that  you are wealthy.We have many stafs to serve patient. We are always try our beswt for making patiets wealthy.</p>
            <button className="web-btn" onClick={checkoutService}>Checkout services</button>
            </div>
        </div>

    );
};

export default Banner;
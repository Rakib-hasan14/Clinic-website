import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className='scnd-banner mb-5'>
                <h1 className='bannertext text-center text-white'>Contact Us</h1>
            </div>
            <div className='res-css text-center text-white w-50 web-primary-bg rounded mx-auto py-5'>
                <h1>Contact with Us</h1>
                <h5 className='mt-3'>Phone: +34749873298</h5>
                <h5>Email: our.popular@gmail.com</h5>
                <h5>Sitated: Al jajira</h5>
            </div>
            <div className='res-css w-50 mx-auto capitalize text-center text-danger mt-5'>
                <h6>We are always Available.24/7.</h6>
                <p>Call us any time we are always available to help everyone</p>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-secondary p-5 text-white'>
            <div className='d-flex align-items-center text-center'>
                <div className='w-50'>
                    <h3>Our Clinik</h3>
                    <p className='mt-4'>We always try to make pateint good . Our certified doctors are always stay in hospital, we have 75 certified doctors in our hospital.We always try to satisfied everyone.we have many stafs.</p>
                </div>
                <div className='w-50'>
                    <h3>Contact us</h3>
                    <h6 className='mt-4'>Phone: +6345746435763</h6>
                    <h6>Email: our.clinik@gmail.com</h6>
                    <h6>Situated: Al jajira.</h6>
                </div>
             </div>
             </div>
            <div className='bg-dark text-center p-2 text-white'>
                <h6>&copy; All Rights reserved by RH.</h6>
            </div>
        </div>
            
    );
};

export default Footer;
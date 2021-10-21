import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div className='about-sec py-5'>
            <div className='container about-sec-res'>
            <div className=' align-items-center about-det'>
                <div className='bg-white p-5'>
                    <h1>This is Public clinik</h1>
                    <h5>We always try to make pateint good . Our certified doctors are always stay in hospital, we have 75 certified doctors in our hospital.We always try to satisfied everyone.we have many stafs.Our stafs behaiviour is very much good. Personaly we guide them for making good relationship between pateint and us.They always hard work for his self for pateints.</h5>
                    <h5 className='fw-bold web-primary'>You happy we happy!!!</h5>
                </div>
            </div>
            <div className=' about-img d-flex align-items-center'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKvImFlfSAtRebp639MSk3H99Neh2sc1AhFw&usqp=CAU" alt="" />
            </div>
        </div>
        </div>
    );
};

export default AboutUs;
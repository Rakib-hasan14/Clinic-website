import React from 'react';
import './Doctors.css'


const Doctors = () => {
    return (
        <div className='h-100 py-5 mb-5'>
            <h1 className="title text-center web-primary my-5">Our certified Doctors</h1>
            <div className="doctors container">
                <div className='detail-doc'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0traH9XtYS3bZejVjbsOTm2Ir1724YEn7gw&usqp=CAU" alt="" />
                     <div className="doctors-sec-text text-white">
                       <h5>Dr. jalina</h5>
                       <h6>Cardiology specialist</h6>
                     </div>   
                </div>
                <div className='detail-doc'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1tSsROYiQo67PF7tQ1QIY5l2yKbPgfdk3A&usqp=CAU" alt="" />
                     <div className="doctors-sec-text text-white">
                       <h5>Dr. Alicia</h5>
                       <h6>Ophthalmology specialist</h6>
                     </div>   
                </div>
                <div className='detail-doc'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBJzCvcqCRmga7fe-76RFiV7sMsdL4cOV6A&usqp=CAU" alt="" />
                     <div className="doctors-sec-text text-white">
                       <h5>Dr. Zamini</h5>
                       <h6>Pulmonary specialist</h6>
                     </div>   
                </div>
                <div className='detail-doc'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEm9wuD5gxJWqNxET7vdddnggnO1hWcPKgQ&usqp=CAU" alt="" />
                     <div className="doctors-sec-text text-white">
                       <h5>Dr. Michel</h5>
                       <h6>Dental specialist</h6>
                     </div>   
                </div>
                <div className='detail-doc'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpKtMK28j414-01-hfjY4vzHrU2ENhp1BIA&usqp=CAU" alt="" />
                     <div className="doctors-sec-text text-white">
                       <h5>Dr. Rose</h5>
                       <h6>Diagnostics specialist</h6>
                     </div>   
                </div>
                <div className='detail-doc'>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdeC5VwZboGq5N0LfcMHND0gjI8Qje0JEtaQ&usqp=CAU" alt="" />
                     <div className="doctors-sec-text text-white">
                       <h5>Dr. ira</h5>
                       <h6>Laboratory specialist</h6>
                     </div>   
                </div >
            </div>
        </div>
    );
};

export default Doctors;
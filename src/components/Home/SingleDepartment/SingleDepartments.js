import React from 'react';
import { Link } from 'react-router-dom';
import './SingleDepartment.css'

const SingleDepartments = ({department}) => {
    const {id , name , img , description} = department;
    return (
        <div className=' department gx-3 web-primary-bg text-white'>
            <div>
            <img src={img} alt="" />
            <div className='departmenttext mt-2 p-2 text-center'>
                <h5>{name}</h5>
                <p>{description}</p>
                <Link to={`/details/${id}`}>
                    <button className='web-btn set-btn'>Details</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default SingleDepartments;
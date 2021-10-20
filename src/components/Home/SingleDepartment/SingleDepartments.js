import React from 'react';
import './SingleDepartment.css'

const SingleDepartments = ({department}) => {
    const {id , name , img , description} = department
    return (
        <div className=' department gx-3 web-primary-bg text-white'>
            <div>
            <img src={img} alt="" />
            <div className='departmenttext mt-2 p-2 text-center'>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
            </div>
        </div>
    );
};

export default SingleDepartments;
import React from 'react';
import './SingleDepartment.css'

const SingleDepartments = ({department}) => {
    const {id , name , img , description} = department
    return (
        <div className='col-md-4 col-6 department'>
            <img src={img} alt="" />
            <div className='departmenttext'>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default SingleDepartments;
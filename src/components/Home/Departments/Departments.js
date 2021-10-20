import React from 'react';
import useDepartments from '../hooks/useDepartments';
import SingleDepartments from '../SingleDepartment/SingleDepartments';
import './Departments.css'

const Departments = () => {
    const { departments} = useDepartments();
    return (
        <div className='container'>
            <div className='row'>
            {
                departments.map(department => <SingleDepartments
                key={department.id}
                department={department}
                ></SingleDepartments>)
            }
            </div>
        </div>
    );
};

export default Departments;
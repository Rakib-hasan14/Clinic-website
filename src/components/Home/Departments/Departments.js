import React from 'react';
import useData from '../hooks/useData';
import useDepartments from '../hooks/useDepartments';
import SingleDepartments from '../SingleDepartment/SingleDepartments';
import './Departments.css'

const Departments = () => {
    const { departments} = useData();
    return (
        <div className='department-bg py-5'>
        <div className='container'>
        <div>
            <h1 className='text-white text-center mb-5'>Our Departments</h1>
        </div>
            <div className='custom-grid'>
            {
                departments.map(department => <SingleDepartments
                key={department.id}
                department={department}
                ></SingleDepartments>)
            }
            </div>
        </div>
        </div>
    );
};

export default Departments;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../Home/hooks/useData';

const Details = () => {
    let {dataId} = useParams();
    const {departments} = useData();
    const [details , setDetails] = useState({});

    

    useEffect(() => {
        const findDepartment = departments.find(sd => sd.id === parseFloat(dataId))
        setDetails(findDepartment)
        
    } , [departments])
        

    return (
        <div className='text-center p-5'>
            <img src={details?.img} alt="" />
            <h1 className='web-primary fw-bold my-3'>This is  {details?.name}</h1>
            <p className='res-css w-50 mx-auto text-danger fw-bold'>{details?.description}</p>
            <h6 className='text-danger fw-bold'>-------------</h6>
        </div>
    );
};

export default Details;
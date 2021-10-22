import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className='text-center text-danger my-5'>
            <h5>Oppps!</h5>
            <h1>404</h1>
            <h3>Page not Found.....</h3>   
            <Link to='/'>
                <button className='web-btn mt-3'>Back home</button>
            </Link>
        </div>
    );
};

export default NotFound;
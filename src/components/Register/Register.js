import React from 'react';
import useAthentication from '../Home/hooks/getUser';

const Register = () => {
    const { googleSignIn , error , user , getEmail , getPassword, signUpEmailAndPassword} = useAthentication()
    return (
        <div className='text-center mb-5'>
            <h1 className='web-primary border-top pt-5 mb-5'>Register plaease!</h1>
            <form  >
                <label className='me-4 fw-bold' htmlFor="name">Name</label>
                <input type="text" placeholder='Your name'/>
                <br /><br />
                <label className='me-4 text-left fw-bold' htmlFor="email">Email</label>
                <input onBlur={getEmail} type="email" placeholder='Your email'/>
                <br /><br />
                <label className='me-4 text-left fw-bold' htmlFor="password">Password</label>
                <input onBlur={getPassword} type="text" placeholder='Password'/>
                <br /><br />
                <input onClick={signUpEmailAndPassword}  type="submit" value="Submit" className='web-btn'/>
            </form>
            <h6 className='mt-4'>---------or----------</h6>
            <button onClick={googleSignIn} className='web-btn mt-4'>Google Sign up</button>
            {user.name || <p className="text-danger">{error}</p>}
            
        </div>
    );
};

export default Register;
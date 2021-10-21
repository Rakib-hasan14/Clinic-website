import React from 'react';
import useAthentication from '../Home/hooks/getUser';

const Login = () => {
    const {googleSignIn , error , user , logInWithEmailAndPassword} = useAthentication()

    return (
        <div className='text-center mb-5'>
            <h1 className='web-primary border-top pt-5 mb-5'>Log in!</h1>
            <form onSubmit={logInWithEmailAndPassword}>
            
                <label className='me-4 text-left fw-bold' htmlFor="email">Email</label>
                <input type="email" placeholder='Your email'/>
                <br /><br />
                <label className='me-4 text-left fw-bold' htmlFor="password">Password</label>
                <input type="text" placeholder='Password'/>
                <br /><br />
                <input type="submit" value="Submit" className='web-btn'/>

            </form>
            <h6 className='mt-4'>---------or----------</h6>
            <button onClick={googleSignIn} className='web-btn mt-4'>Google Sign in</button>
            {user.name || <p className="text-danger">{error}</p>}

        </div>
    );
};

export default Login;
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAthentication from '../Home/hooks/getUser';

const Login = () => {
    const {googleSignIn , error , user , setError , setUser, logInWithEmailAndPassword} = useAthentication()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    console.log(redirect_uri)

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            const user = result.user;
            history.push(redirect_uri)
            setUser(user)
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
    }

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

                <Link to='/registration'  className='text-secondary fw-bold d-block'>Have not account?</Link>

            </form>
            <h6 className='mt-4'>---------or----------</h6>
            <button onClick={handleGoogleSignIn} className='web-btn mt-4'>Google Sign in</button>
            {user.name || <p className="text-danger">{error}</p>}

        </div>
    );
};

export default Login;
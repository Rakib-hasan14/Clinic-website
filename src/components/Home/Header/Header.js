import React from 'react';
import { Link } from 'react-router-dom';
import useAthentication from '../hooks/getUser';
import './Header.css'

const Header = () => {
    const {user , logOut} = useAthentication()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light m-0 p-0">
                <div className="container-fluid m-0 p-0">
                 <a className="navbar-brand web-primary-bg py-3 px-5  text-white fw-bold logo" href="/home">Our Clinik</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                  </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-center mx-auto fw-bold">
                    <Link className="nav-link active  nav-style" aria-current="page" to="/home">Home</Link>
                    <Link className="nav-link nav-style" to="/contact">Contact</Link>
                    <Link className="nav-link nav-style" to="/testimonials">Testimonials</Link>
                    <Link className="nav-link nav-style" to="/login">Log in</Link>
                    <Link className="nav-link nav-style" to="/registration">Regitration</Link>
                    {
                        user.email && <div>
                            <p className='d-inline mx-3 my-0'>Hello, {user.displayName}</p>
                        <button onClick={logOut} className='web-btn  mt-0'>Log out</button>
                        </div>
                    }
                </div>
                </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
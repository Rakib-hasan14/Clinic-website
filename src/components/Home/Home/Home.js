import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Departments></Departments>
            <Doctors></Doctors>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
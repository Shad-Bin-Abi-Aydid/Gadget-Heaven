import React from 'react';
import Banner from '../components/Banner';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
    const location = useLocation();

    console.log(location);
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;
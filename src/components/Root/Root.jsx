import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import FirebaseProvider from '../../FirebaseProvider/FirebaseProvider';

const Root = () => {
    return (
        <div className='2xl:container mx-auto'>
            <Navbar></Navbar>
            <FirebaseProvider></FirebaseProvider>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
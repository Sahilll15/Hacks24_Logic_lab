import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';


import { useAuth } from '../context/AuthContext';

const ProtectedRoutes = () => {

    const user = localStorage.getItem('auth');

    return (<>
        {user ? <Outlet /> : <Navigate to="/login" />}
    </>

    )
};

export default ProtectedRoutes;
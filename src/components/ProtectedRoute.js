import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const logInJwt = JSON.parse(localStorage.getItem('logInJwt'));

    return logInJwt ? props.children : <Navigate to='/'/>
};

export default ProtectedRoute;
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ logIn, children }) => {
    if (logIn === null) {
        return null;
    }

    return logIn ? children : <Navigate to='/' />
}

export default ProtectedRoute;
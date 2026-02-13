import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    // If still checking for a token, show a simple loading message
    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</div>;
    }

    // If not authenticated, redirect to login
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

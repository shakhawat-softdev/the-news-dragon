import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


const PrivateRoute = ({ children }) => {

    const location = useLocation();
    console.log(location);

    const { user, loader } = useContext(AuthContext);
    console.log(loader);

    if (loader) {
        return <Spinner animation="border" />;
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;
import React from 'react';
import PropTypes from 'prop-types';
import { getCookie } from '../utils/cookies';
import { useLocation, Navigate } from "react-router-dom";

    export function ProtectedRouteElement({ element }) {
      const location = useLocation();
      const isUser = (getCookie('accessToken'));
      const forAuth = location.pathname.startsWith('/profile') ? false : true;
  
      if (!isUser && !forAuth) return <Navigate to="/login" state={{ from: location }} />;
      if (isUser && forAuth) return <Navigate to={location.state?.from || "/"} />;
    
      return element;
    }
    
    ProtectedRouteElement.propTypes = {
      element: PropTypes.element.isRequired,
      
    }
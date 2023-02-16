import React from 'react';
import PropTypes from 'prop-types';
import { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from '../services/actions/authorization';
import { getCookie } from '../utils/cookies';
import { useLocation, Navigate } from "react-router-dom";

export function ProtectedRouteElement({ element, forAuth }) {
    const user = useSelector((store) => store.auth.user);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (getCookie("accessToken")) {
          dispatch(getUserInfo());
        }
      }, [dispatch]);


      if (user && !forAuth) {
        return <Navigate to={location.state?.from || "/"} />;
      }

      if (!user && forAuth) {
        return <Navigate to="/login" state={{ from: location }} />;
      }

      return element;
    }
    ProtectedRouteElement.propTypes = {
      element: PropTypes.element.isRequired,
      forAuth: PropTypes.bool.isRequired
    }

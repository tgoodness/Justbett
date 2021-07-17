import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  //const isLoggedIn = localStorage.getItem("auth");
  const isLoggedIn = 'user';

  return (
    <Route
      { ...rest }
      render={ (props) =>
        isLoggedIn ? (
          <Component { ...props } />
        ) : (
          <Redirect to={ { pathname: '/', state: { from: location } } } />
        )
      }
    />
  );
};
export default PrivateRoute;

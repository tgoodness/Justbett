import React from 'react';
import { createContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import global from '../global/global';
import { init } from '../reducers/get';

type Props = {
  children: React.ReactNode;
};

export const GlobalContext = createContext(init);
const Private = (props: Props): JSX.Element => {
  const { children } = props;

  const location = useLocation();
  //const isLoggedIn = sessionStorage.getItem('auth');
  const isLoggedIn = true;
  const { state } = global();

  if (!isLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};
export default Private;

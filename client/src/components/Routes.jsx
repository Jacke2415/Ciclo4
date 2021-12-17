import React from 'react';
import Login from '../pages/Login';
import PublicRoutes from './PublicRoute';

const AuthorizationContext  = React.createContext();

const Routes = () => {
  const token = localStorage.getItem('token');

  // conditionally route based on the token value

  return (
    <AuthorizationContext.Provider value={token}>
      {!!token ? <PublicRoutes /> : <Login />}
    </AuthorizationContext.Provider>
  )
}

export default Routes;
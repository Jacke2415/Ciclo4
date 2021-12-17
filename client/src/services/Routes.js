import React from 'react';
import PrivateRoutes from './NominaRoute';
import EmpleadoRoute from './EmpleadoRoute.js';

const AuthorizationContext  = React.createContext();

const Routes = () => {
  const token = true;/* localStorage.getItem('token'); */
    
  // conditionally route based on the token value

  return (
    <AuthorizationContext.Provider value={token}>
      {!!token ? <PrivateRoutes /> : <EmpleadoRoute />}
    </AuthorizationContext.Provider>
  )
}

export default Routes;
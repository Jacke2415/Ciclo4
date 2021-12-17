import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './LoginPage';
/* import HomePage from './HomePage';
 */
const PublicRoute = () => {
  
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Redirect to='/' />
    </Switch>
  )
}

export default PublicRoute;
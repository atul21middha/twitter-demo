import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TimeLine from "./TimeLine";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Header from "../components/Header";

const RestrictedRoute = ({ component: Component, ...rest }) => {
  const { authUser } = useSelector(({ auth }) => auth);
  return (
    <Route
      {...rest}
      render={props =>
        authUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { authUser } = useSelector(({ auth }) => auth);

  const location = useLocation();

  if (
    authUser === null &&
    location.pathname !== '/signin' &&
    location.pathname !== '/signup' &&
    location.pathname !== '/forgot-password'
  ) {
    return <Redirect to={'/signin'} />;
  } else if (authUser && (location.pathname === '' || location.pathname === '/' || location.pathname === '/signin')) {
    return <Redirect to={'/home'} />;
  }

  return (
    <React.Fragment>
      {authUser && <Header/>}
      <Switch>
        <RestrictedRoute path="/home" component={TimeLine} />
        <Route path="/signin" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;

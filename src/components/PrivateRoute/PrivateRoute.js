import React from 'react';
import { Redirect, Route } from 'react-router';
import useAthentication from '../Home/hooks/getUser';

const PrivateRoute = ({children , ...rest}) => {
    const {user} = useAthentication();
    return (
        <Route
        {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
        >
            
        </Route>
    );
};

export default PrivateRoute;
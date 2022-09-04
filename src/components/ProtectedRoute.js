import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(Component);
  return (
    <Route>
      {() =>
        props.LoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/sign-in" />
        )
      }
    </Route>
  );
};
export default ProtectedRoute;

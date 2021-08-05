import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("KEY_TOKEN");
  const roles = localStorage.getItem("roles");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth && roles === "seller" ? (
          <>
            <Component {...props} />
          </>
        ) : (
          (alert("Forbidder acces"), (<Redirect to="/" />))
        );
      }}
    />
  );
};

export default PrivateRoute;

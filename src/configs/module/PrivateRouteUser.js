import React from "react";
import { Route, Redirect } from "react-router-dom";
const PrivateRouteUser = ({ component: Component, ...rest }) => {
  const isAuth = localStorage.getItem("KEY_TOKEN");
  return (
    <Route
      {...rest}
      render={(props) => {
        return isAuth ? (
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

export default PrivateRouteUser;

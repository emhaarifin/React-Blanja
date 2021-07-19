// import logo from './logo.svg';
// import "./App.css";
import React, { Component } from "react";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import ConfirmPassword from "./auth/ConfirmPassword/ConfirmPassword";
import ConfirmPasswordLogin from "./auth/ConfirmPasswordLogin/ConfirmPasswordLogin";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProfileSeller from "./pages/ProfileSeller/ProfileSeller";
import Category from "./pages/Category/Category";
// import ProductSeller from "./pages/ProductSeller/ProductSeller";
import SellerProduct from "./pages/SellerProduct/SellerProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/forgot_password" component={ForgotPassword} />
          <Route path="/auth/confirm_password" component={ConfirmPassword} />
          <Route
            path="/auth/confirm_password_login"
            component={ConfirmPasswordLogin}
          />
          <Route
            exact
            path="/profile/seller/product"
            component={SellerProduct}
          />
          <Route exact path="/products/:id" component={Product} />
          <Route path="/profile/seller" component={ProfileSeller} />
          <Route path="/category/:id" component={Category} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

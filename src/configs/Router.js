import React, { Component } from "react";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import ForgotPassword from "../auth/ForgotPassword/ForgotPassword";
import ConfirmPassword from "../auth/ConfirmPassword/ConfirmPassword";
import ConfirmPasswordLogin from "../auth/ConfirmPasswordLogin/ConfirmPasswordLogin";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import ProfileSeller from "../pages/ProfileSeller/ProfileSeller";
import AddProduct from "../pages/AddProduct/AddProduct";
import Category from "../pages/Category/Category";
import MyBag from "../pages/MyBag/MyBag";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import SellerProduct from "../pages/SellerProduct/SellerProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckOut from "../pages/CheckOut/CheckOut";
import ProfileCust from "../pages/ProfileCust/ProfileCust";
import ShippingAddressCust from "../pages/ShippingAddressCust/ShippingAddressCust";
import CustOrder from "../pages/CustOrder/CustOrder";
import SellerOrder from "../pages/SellerOrder/SellerOrder";
import PrivateRoute from "./module/PrivateRoute";
import PrivateRouteUser from "./module/PrivateRouteUser";
import PublicRoute from "./module/PublicRoute";
export class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mybag" render={(props) => <MyBag {...props} />} />
          <Route path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/auth/login"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/auth/register"
            render={(props) => <Register {...props} />}
          />
          <Route path="/auth/forgot_password" component={ForgotPassword} />
          <Route path="/auth/confirm_password" component={ConfirmPassword} />
          <Route
            path="/auth/confirm_password_login"
            component={ConfirmPasswordLogin}
          />
          <PrivateRoute
            exact
            path="/profile/seller/product"
            component={SellerProduct}
          />
          <PrivateRouteUser
            exact
            path="/profile/custommer"
            component={ProfileCust}
          />
          <PrivateRoute
            path="/profile/seller/add_product"
            component={AddProduct}
          />
          <Route
            exact
            path="/products/:id"
            render={(props) => <Product {...props} />}
          />
          <PrivateRouteUser
            path="/profile/custommer/shipping_address"
            component={ShippingAddressCust}
          />
          <PrivateRouteUser
            path="/profile/custommer/my_order"
            component={CustOrder}
          />
          <PrivateRoute
            path="/profile/seller/update_product/:id"
            component={UpdateProduct}
          />
          <PrivateRoute
            exact
            path="/profile/seller"
            component={ProfileSeller}
          />
          <Route path="/category/:id" component={Category} />
          <PrivateRoute
            path="/profile/seller/myorderseller"
            component={SellerOrder}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;

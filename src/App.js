import React, { Component } from "react";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import ForgotPassword from "./auth/ForgotPassword/ForgotPassword";
import ConfirmPassword from "./auth/ConfirmPassword/ConfirmPassword";
import ConfirmPasswordLogin from "./auth/ConfirmPasswordLogin/ConfirmPasswordLogin";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import ProfileSeller from "./pages/ProfileSeller/ProfileSeller";
import AddProduct from "./pages/AddProduct/AddProduct";
import Category from "./pages/Category/Category";
import MyBag from "./pages/MyBag/MyBag";
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import SellerProduct from "./pages/SellerProduct/SellerProduct";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CheckOut from "./pages/CheckOut/CheckOut";
import ProfileCust from "./pages/ProfileCust/ProfileCust";
import ShippingAddressCust from "./pages/ShippingAddressCust/ShippingAddressCust";
import CustOrder from "./pages/CustOrder/CustOrder";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mybag" component={MyBag} />
          <Route path="/checkout" component={CheckOut} />
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
          <Route exact path="/profile/custommer" component={ProfileCust} />
          <Route path="/profile/seller/add_product" component={AddProduct} />
          <Route exact path="/products/:id" component={Product} />
          <Route
            path="/profile/custommer/shipping_address"
            component={ShippingAddressCust}
          />
          <Route path="/profile/custommer/my_order" component={CustOrder} />
          <Route
            path="/profile/seller/update_product/:id"
            component={UpdateProduct}
          />
          <Route path="/profile/seller" component={ProfileSeller} />
          <Route path="/category/:id" component={Category} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

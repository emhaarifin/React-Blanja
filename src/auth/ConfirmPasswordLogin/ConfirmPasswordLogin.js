import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
// import "./Login.css";
import { Link } from "react-router-dom";

export class ConfirmPasswordLogin extends Component {
  render() {
    return (
      <>
        <main className="auth-wrapper">
          <Logo />

          <p class="heading-auth">Please login with your account</p>
          <p class="confirm-login-notification">
            We have sent an email containing a password reset instruction to
            your email. please check your email.
          </p>

          <section className="field-group">
            <Input id="email" type="text" element="input" placeholder="EMAIL" />
          </section>

          <section className="field-group-inline">
            <Link to="/auth/forgot_password">Forgot password?</Link>
          </section>

          <Link to="/auth/login">
            <Button className="button" styling="button--submit">
              PRIMARY
            </Button>
          </Link>

          <section className="footnote-wrapper">
            Don't have a Tokopedia account?
            <Link to="/auth/login"> Login</Link>
          </section>
        </main>
      </>
    );
  }
}

export default ConfirmPasswordLogin;

import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import "./Login.css";
import { Link } from "react-router-dom";

export class Login extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
    };
  }
  toggleTab(index) {
    this.setState({ toggleState: index });
  }

  handleLogin() {
    if (this.state.toggleState === 1) {
      <Link to="/profile/seller"></Link>;
    } else {
      <Link to="/profile/custommer"></Link>;
    }
  }

  componentDidMount() {
    document.title = "Login";
  }

  render() {
    const { toggleState } = this.state;
    return (
      <>
        <main className="auth-wrapper">
          <Logo />

          <section className="auth-form">
            <p className="heading-auth">Please login with your account</p>
            <section className="tab-auth">
              <TabButton
                // typeTab={"active-tabs"}
                toggleTab={() => this.toggleTab(1)}
                typeTab={
                  toggleState === 1
                    ? "active-tabs-custommer"
                    : "non-active-tabs-custommer"
                }
              >
                Custommer
              </TabButton>
              <TabButton
                toggleTab={() => this.toggleTab(2)}
                typeTab={
                  toggleState === 2
                    ? "active-tabs-seller"
                    : "non-active-tabs-seller"
                }
              >
                Seller
              </TabButton>
            </section>

            <section className="field-group">
              <Input
                id="email"
                type="text"
                element="input"
                placeholder="EMAIL"
              />
              <Input
                id="password"
                type="password"
                element="input"
                placeholder="PASSWORD"
              />
            </section>

            <section className="field-group-inline">
              <Link to="/auth/forgot_password">Forgot password?</Link>
            </section>

            <Link to="/profile/seller">
              <Button className="button" styling="button--submit">
                PRIMARY
              </Button>
            </Link>

            <section className="footnote-wrapper">
              Don't have a Tokopedia account?
              <Link to="/auth/register"> Register</Link>
            </section>
          </section>
        </main>
      </>
    );
  }
}

export default Login;

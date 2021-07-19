import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
// import "./Register.css";
import { Link } from "react-router-dom";

export class Register extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
    };
  }
  toggleTab(index) {
    this.setState({ toggleState: index });
    // console.log(index);
  }

  render() {
    const { toggleState } = this.state;
    // console.log(toggleState);
    return (
      <>
        <main className="auth-wrapper">
          <Logo />

          <p className="heading-auth">Please sign up with your account</p>
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
          {toggleState === 1 ? (
            <section className="field-group">
              <Input
                id="nama"
                type="text"
                element="input"
                placeholder="Nama"
              ></Input>
              <Input
                id="email"
                type="text"
                element="input"
                placeholder="Email"
              />
              <Input
                id="password"
                type="password"
                element="input"
                placeholder="Password"
              />
            </section>
          ) : (
            <section className="field-group">
              <Input
                id="nama"
                type="text"
                element="input"
                placeholder="Nama"
              ></Input>
              <Input
                id="email"
                type="text"
                element="input"
                placeholder="Email"
              />
              <Input
                id="phone_number"
                type="number"
                element="input"
                placeholder="Phone number"
              ></Input>
              <Input
                id="store_name"
                type="text"
                element="input"
                placeholder="Store name"
              ></Input>
              <Input
                id="password"
                type="password"
                element="input"
                placeholder="Password"
              />
            </section>
          )}

          <section className="field-group-inline">
            <Link to="forgot_password">Forgot password?</Link>
          </section>

          <Button
            className="button"
            styling="button--submit"
            onCLick={() => this.loginHandler()}
          >
            PRIMARY
          </Button>

          <section className="footnote-wrapper">
            Don't have a Tokopedia account?
            <Link to="/auth/login"> Login</Link>
          </section>
        </main>
      </>
    );
  }
}

export default Register;

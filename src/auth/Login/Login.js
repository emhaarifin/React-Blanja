/* eslint-disable no-sequences */
import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import "./Login.css";
import { connect } from "react-redux";
import { login } from "../../redux/action/user";
import { Link } from "react-router-dom";

const mapStateToProps = (user) => {
  return {
    user: user.user,
  };
};
export class Login extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
      email: "",
      password: "",
      name: "",
    };
  }

  changeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  toggleTab(index) {
    this.setState({ toggleState: index });
  }

  postLogin = (event) => {
    event.preventDefault();
    const { email, password, toggleState } = this.state;
    const data = {
      email,
      password,
    };
    this.props.dispatch(login(data, toggleState, this.props.history));
  };

  componentDidMount() {
    document.title = "Login";
  }

  render() {
    const { toggleState, email, password } = this.state;
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
            <form action="" method="post">
              <section className="field-group">
                <Input
                  id="email"
                  type="text"
                  name="email"
                  value={email}
                  element="input"
                  placeholder="EMAIL"
                  onChange={this.changeText}
                />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  element="input"
                  placeholder="PASSWORD"
                  onChange={this.changeText}
                />
              </section>

              <section className="field-group-inline">
                <Link to="/auth/forgot_password">Forgot password?</Link>
              </section>

              <Button
                className="button"
                styling="button--submit"
                onClick={this.postLogin}
              >
                PRIMARY
              </Button>
            </form>
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

export default connect(mapStateToProps)(Login);

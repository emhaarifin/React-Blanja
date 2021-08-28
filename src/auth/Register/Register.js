import React, { Component } from "react";
import Logo from "../../components/logo/logo";
import Input from "../../components/input/input";
import Button from "../../components/Button/Button";
import TabButton from "../../components/TabButton/TabButton";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { registerCust, registerSel } from "../../redux/action/user";

const mapStateToProps = (user) => {
  return {
    user: user.user,
  };
};
export class Register extends Component {
  constructor(properties) {
    super(properties);
    this.state = {
      toggleState: 1,
      name: "",
      email: "",
      phone_number: 0,
      store_name: "",
      password: "",
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
  postRegister = (event) => {
    event.preventDefault();
    const { email, name, phone_number, store_name, password, toggleState } =
      this.state;
    const dataCust = {
      name,
      email,
      password,
    };

    const dataSel = {
      name,
      email,
      phone_number,
      store_name,
      password,
    };
    if (toggleState === 1) {
      return this.props.dispatch(registerCust(dataCust, this.props.history));
    } else if (toggleState === 2) {
      return this.props.dispatch(registerSel(dataSel, this.props.history));
    } else {
      return alert(`Something Wrong`);
    }
  };
  componentDidMount() {
    document.title = "Register";
  }

  render() {
    const { toggleState, name, email, password, store_name } = this.state;
    return (
      <>
        <main className="auth-wrapper">
          <Logo />

          <p className="heading-auth">Please sign up with your account</p>
          <section className="tab-auth">
            <TabButton
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
          <form action="" method="POST">
            {toggleState === 1 ? (
              <section className="field-group">
                <Input
                  id="name"
                  type="text"
                  element="input"
                  name="name"
                  placeholder="Nama"
                  value={name}
                  onChange={this.changeText}
                ></Input>
                <Input
                  id="email"
                  type="text"
                  element="input"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.changeText}
                />
                <Input
                  id="password"
                  type="password"
                  element="input"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.changeText}
                />
              </section>
            ) : (
              <section className="field-group">
                <Input
                  id="name"
                  type="text"
                  element="input"
                  placeholder="Nama"
                  name="name"
                  value={name}
                  onChange={this.changeText}
                ></Input>
                <Input
                  id="email"
                  type="text"
                  element="input"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.changeText}
                />
                <Input
                  id="phone_number"
                  type="number"
                  element="input"
                  placeholder="Phone number"
                  name="phone_number"
                  // value={phone_number}
                  onChange={this.changeText}
                ></Input>
                <Input
                  id="store_name"
                  type="text"
                  element="input"
                  name="store_name"
                  placeholder="Store name"
                  value={store_name}
                  onChange={this.changeText}
                ></Input>
                <Input
                  id="password"
                  type="password"
                  element="input"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.changeText}
                />
              </section>
            )}

            <section className="field-group-inline">
              <Link to="/auth/forgot_password">Forgot password?</Link>
            </section>

            {/* <Link to="/auth.login"> */}
            <Button
              className="button"
              styling="button--submit"
              onClick={this.postRegister}
            >
              PRIMARY
            </Button>
          </form>
          {/* </Link> */}
          <section className="footnote-wrapper">
            Don't have a Tokopedia account?
            <Link to="/auth/login"> Login</Link>
          </section>
        </main>
      </>
    );
  }
}

export default connect(mapStateToProps)(Register);

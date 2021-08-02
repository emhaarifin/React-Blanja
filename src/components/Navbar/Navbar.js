import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LOGO from "../logo/logo";
import Search from "../../asset/search.png";
import Filter from "../../asset/filter-icon.png";
import "./Navbar.css";
import IconCart from "../../asset/shopping-cart.svg";
import ImageProfile from "../../asset/mybag/icon-profile.png";
import ImageMail from "../../asset/mybag/icon-mail.png";
import IconNotification from "../../asset/mybag/icon-notification.png";
import "./NavbarLogin.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserById } from "../../redux/action/user";

function Navbar(props) {
  const isAuth = localStorage.getItem("KEY_TOKEN");
  const idUser = localStorage.getItem("id");
  console.log(idUser, "id user");
  const dispatch = useDispatch();
  const toProfile = async () => {
    dispatch(getUserById(idUser));
  };
  const { roles } = useSelector((state) => state.user.userData);
  console.log("roles", roles);
  console.log(roles, "tes userdata");
  const Navbar = !isAuth ? (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container">
        <Link to="/">
          <LOGO />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav midlle-nav">
            <li className="nav-item">
              <form className="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn-search">
                  <img
                    src={Search}
                    alt="logo-search"
                    className="icon-search"
                  ></img>
                </button>
              </form>
            </li>
            <li className="nav-item">
              <button
                // data-bs-toggle="modal"
                // data-bs-target="#"
                className="btn-filter"
              >
                <img src={Filter} className="filter" alt=""></img>
              </button>
            </li>
            <li className="nav-item">
              <Link to="/mybag" className="nav-link btn-cart">
                <img src={IconCart} alt=""></img>
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-item btn-login-signup">
                <Link to="/auth/login" className="btn login">
                  Login
                </Link>
                <Link to="/auth/register" className="btn signup">
                  Signup
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div className="container">
        <Link to="/">
          <LOGO />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`navbar-nav ${props.className}`}>
            <li className="nav-item">
              <form className="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn-search">
                  <img
                    src={Search}
                    alt="logo-search"
                    className="icon-search"
                  ></img>
                </button>
              </form>
            </li>
            <li className="nav-item">
              <button
                data-bs-toggle="modal"
                data-bs-target="#filter-product"
                className="btn-filter"
              >
                <img src={Filter} className="filter" alt=""></img>
              </button>
            </li>
            <li className="nav-item">
              <a className="nav-link btn-cart" href="./pages/mybag.html">
                <img src={IconCart} alt=""></img>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-item header-right">
                <Link to="" className="btn-notification">
                  <img src={IconNotification} alt=""></img>
                </Link>
                <Link to="" className="btn-mail-auth">
                  <img src={ImageMail} alt=""></img>
                </Link>
                {roles === "custommer" ? (
                  <>
                    <Link to="/profile/custommer" className="btn-profile-auth">
                      <img src={ImageProfile} alt=""></img>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/profile/seller" className="btn-profile-auth">
                      <img src={ImageProfile} alt=""></img>
                    </Link>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return <>{Navbar}</>;
}

export default Navbar;

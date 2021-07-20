import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import LOGO from "../logo/logo";
import Search from "../../asset/search.png";
import Filter from "../../asset/filter-icon.png";
import "./Navbar.css";
import IconCart from "../../asset/shopping-cart.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
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
  );
}

export default Navbar;

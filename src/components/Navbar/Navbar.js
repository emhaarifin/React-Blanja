import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import LOGO from '../logo/logo';
import Search from '../../asset/search.png';
import Filter from '../../asset/filter-icon.png';
import './Navbar.css';
import IconCart from '../../asset/shopping-cart.svg';
import ImageMail from '../../asset/mybag/icon-mail.png';
import IconNotification from '../../asset/mybag/icon-notification.png';
import './NavbarLogin.css';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar(props) {
  const isAuth = localStorage.getItem('KEY_TOKEN');
  const { roles, avatar } = useSelector((state) => state.user.userData);
  const { cart } = useSelector((state) => state.products);
  const [search, setSearch] = useState('');

  let location = useHistory();

  const handleForm = (e) => {
    console.log(search);
    setSearch(e.target.value);
  };
  const searchProduct = () => {
    location.push(`/search?search=${search}`);
    location.go(0);
  };
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
                  onChange={handleForm}
                  onKeyPress={(e) => e.key === 'Enter' && searchProduct()}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn-search" onClick={searchProduct}>
                  <img src={Search} alt="logo-search" className="icon-search"></img>
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
              <Link className="nav-link btn-cart" style={{ position: 'relative' }} to="/mybag">
                <img src={IconCart} alt=""></img>
                {cart?.length && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '0',
                      background: '#DB3022',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '0px 5px',
                      fontSize: '12px',
                    }}
                  >
                    {cart?.length}
                  </span>
                )}
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
                  onChange={handleForm}
                  onKeyPress={(e) => e.key === 'Enter' && searchProduct()}
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button className="btn-search" onClick={searchProduct}>
                  <img src={Search} alt="logo-search" className="icon-search"></img>
                </button>
              </form>
            </li>
            <li className="nav-item">
              <button /*data-bs-toggle="modal" data-bs-target="#filter-product"*/ className="btn-filter">
                <img src={Filter} className="filter" alt=""></img>
              </button>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn-cart" style={{ position: 'relative' }} to="/mybag">
                <img src={IconCart} alt=""></img>
                {cart?.length && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '0',
                      background: '#DB3022',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '0px 5px',
                      fontSize: '12px',
                    }}
                  >
                    {cart?.length}
                  </span>
                )}
              </Link>
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
                {roles === 'custommer' ? (
                  <>
                    <Link to="/profile/custommer" className="btn-profile-auth">
                      <div className="image-avatar">
                        <img
                          src={
                            props.imagePreview
                              ? props.imagePreview
                              : avatar
                              ? avatar
                              : 'https://res.cloudinary.com/emhaarifin/image/upload/v1632113374/Tele%20App/user-default_khw9y4.png'
                          }
                          alt=""
                        ></img>
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/profile/seller" className="btn-profile-auth">
                      <div className="image-avatar">
                        <img
                          src={
                            props.imagePreview
                              ? props.imagePreview
                              : avatar
                              ? avatar
                              : 'https://res.cloudinary.com/emhaarifin/image/upload/v1632113374/Tele%20App/user-default_khw9y4.png'
                          }
                          alt=""
                        ></img>
                      </div>
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

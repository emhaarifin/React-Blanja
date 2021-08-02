// import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import LOGO from "../logo/logo";
// import Search from "../../asset/search.png";
// import { Link } from "react-router-dom";
// import Filter from "../../asset/filter-icon.png";
// import ImageProfile from "../../asset/mybag/icon-profile.png";
// import ImageMail from "../../asset/mybag/icon-mail.png";
// import IconCart from "../../asset/shopping-cart.svg";
// import IconNotification from "../../asset/mybag/icon-notification.png";
// import "./NavbarLogin.css";
// function NavbarLogin(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
//       <div className="container">
//         <Link to="/">
//           <LOGO />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className={`navbar-nav ${props.className}`}>
//             <li className="nav-item">
//               <form className="search">
//                 <input
//                   className="form-control"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                 ></input>
//                 <button className="btn-search">
//                   <img
//                     src={Search}
//                     alt="logo-search"
//                     className="icon-search"
//                   ></img>
//                 </button>
//               </form>
//             </li>
//             <li className="nav-item">
//               <button
//                 data-bs-toggle="modal"
//                 data-bs-target="#filter-product"
//                 className="btn-filter"
//               >
//                 <img src={Filter} className="filter" alt=""></img>
//               </button>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link btn-cart" href="./pages/mybag.html">
//                 <img src={IconCart} alt=""></img>
//               </a>
//             </li>
//           </ul>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <div className="nav-item header-right">
//                 <Link to="" className="btn-notification">
//                   <img src={IconNotification} alt=""></img>
//                 </Link>
//                 <Link to="" className="btn-mail">
//                   <img src={ImageMail} alt=""></img>
//                 </Link>
//                 <Link to="/profile/custommer" className="btn-profile">
//                   <img src={ImageProfile} alt=""></img>
//                 </Link>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//  );
// }

// export default NavbarLogin;

import React from "react";
import Logo from "../../asset/blanja-logo.png";
import "./logo.css";

const LOGO = () => {
  return (
    <main className="logo-wrapper">
      <img src={Logo} alt="logo blanja" />
      <p className="title-company">Blanja</p>
    </main>
  );
};

export default LOGO;

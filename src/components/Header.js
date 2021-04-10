import React, { useState } from "react";
import logo from "../assets/shared/desktop/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__logo" />
    </div>
  );
};

export default Header;

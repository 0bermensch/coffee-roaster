import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/desktop/logo.svg";
import NavLinks from "./Links";
import menu from "../assets/shared/mobile/icon-hamburger.svg";
import close from "../assets/shared/mobile/icon-close.svg";

const Header = () => {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const navState = useRef;
  const { body } = document;

  useEffect(() => {
    onMobNavChange();
  });

  const openMobNav = () => {
    navState.current.classList.add("change");
    body.style.overflowY = "hidden";
    body.parentElement.style.overflowY = "hidden";
  };

  const closeMobNav = () => {
    setTimeout(function () {
      navState.current.classList.remove("change");
    }, 850);
    body.style.overflowY = "visible";
    body.parentElement.style.overflowY = "visible";
  };

  const onMobNavChange = () => {
    let menu = document.querySelector(".header__mob--nav"),
      menuChildren = [...menu.children[0].children].concat(menu.children[1]);

    menuChildren.forEach((child) =>
      child.addEventListener("click", () => {
        closeAll();
      })
    );
  };

  const closeAll = () => {
    setOpenNavMenu(false);
    closeMobNav();
  };

  return (
    <div className="header">
      <Link to="/" onClick={() => closeAll()}>
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <div className="header__navs">
        <NavLinks />
      </div>
      <div
        className="header__mob"
        ref={navState}
        onClick={() => setOpenNavMenu(!openNavMenu)}
      >
        <img
          className="header__mob--open"
          src={menu}
          alt="open"
          onClick={openMobNav}
        />
        <img
          className={`header__mob--close ${!openNavMenu ? "spin" : ""}`}
          src={close}
          alt="close"
          onClick={closeMobNav}
        />
      </div>
      <div
        className={`header__mob--nav ${openNavMenu ? "deployed" : ""} `}
        onClick={onMobNavChange}
      >
        <NavLinks />
      </div>
      <div className={`overlay ${openNavMenu ? "active" : ""}`} />
    </div>
  );
};

export default Header;

import React from "react";
import logo from "../assets/shared/desktop/logo.svg";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import insta from "../assets/shared/desktop/icon-instagram.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import NavLinks from "./Links";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        <img src={logo} alt="" className="footer__logo" />
      </Link>
      <div className="footer__navs">
        <NavLinks />
      </div>
      <div className="footer__socials">
        <img src={facebook} alt="" className="footer__socials--logo" />
        <img src={twitter} alt="" className="footer__socials--logo" />
        <img src={insta} alt="" className="footer__socials--logo" />
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Links } from "react-router-dom";

const Links = () => {
  const navLinks = ["HOME", "ABOUT US", "CREATE YOUR PLAN"];

  return (
    <ul className="links">
      {navLinks.map((links, i) => (
        <li className="links__links" key={i}>
          <Link to={i === 0 ? `/` : `/${links}`}>{links}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;

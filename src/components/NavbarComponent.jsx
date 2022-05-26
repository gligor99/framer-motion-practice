import React from "react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <ul>
      <li>
        <NavLink className="link" to="/">
          Home Page
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/second">
          Second Page
        </NavLink>
      </li>
      <li>
        <NavLink className="link" to="/third">
          Third Page
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarComponent;

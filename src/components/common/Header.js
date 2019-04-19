import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const acitveStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={acitveStyle} exact>
        Home
      </NavLink>
      {"  |  "}
      <NavLink to="/courses" activeStyle={acitveStyle}>
        Courses
      </NavLink>
      {"  |  "}
      <NavLink to="/about" activeStyle={acitveStyle}>
        About
      </NavLink>
    </nav>
  );
};

export default Header;

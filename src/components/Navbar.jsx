import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>MonkeyRock</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/productos/Hombres">
            Hombres
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Mujeres">
            Mujeres
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Niños">
            Niños
          </Link>
        </li>

        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

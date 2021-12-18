import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span className="header"> React Context API</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/"> Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart"> Cart</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;

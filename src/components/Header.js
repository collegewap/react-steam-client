import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" classNmae="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" classNmae="item">
          All Steams
        </Link>
      </div>
    </div>
  );
};

export default Header;

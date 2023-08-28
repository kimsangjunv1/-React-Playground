import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "..";
import logo from "./../../assets/img/main_logo.svg";

const HeaderConts = () => {
  return (
    <header id="header" className="header_inner">
      <div className="header_inner">
        <Link to="/">
          <img
            src={logo}
            alt="플레이그라운드 로고 이미지"
            className="header_logo"
          />
        </Link>
        <SearchBar />
      </div>
    </header>
  );
};

export default HeaderConts;

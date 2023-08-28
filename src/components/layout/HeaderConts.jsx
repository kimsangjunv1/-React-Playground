import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "..";

// import logo from "./../assets/img/youtube_logo.png";

// import { MdOutlineComputer } from "react-icons/md";

const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        {/* <img src={logo} alt="youtube logo" className="yt_logo" /> */}
        <Link to="/">
          {/* <MdOutlineComputer className="icon" /> */}
          TechTube
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderConts;

import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

import imgA from "./../img/youtube_logo.png";

// import { MdOutlineComputer } from "react-icons/md";

const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <img src={imgA} alt="youtube logo" className="yt_logo" />
        <Link to="/">
          {/* <MdOutlineComputer className="icon" /> */}
          JunTube
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderConts;

import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "./";

import { MdOutlineComputer } from "react-icons/md";

const HeaderConts = () => {
  return (
    <header id="header">
      <h1 className="logo">
        <Link to="/">
          <MdOutlineComputer className="icon" />
          Compute History
        </Link>
      </h1>
      <SearchBar />
    </header>
  );
};

export default HeaderConts;

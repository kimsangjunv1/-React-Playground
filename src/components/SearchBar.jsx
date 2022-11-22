import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="search">
      <label htmlFor="searchInput" className="glass">
        <BsSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="가수 유튜버를 검색하세요!"
        title="검색"
      />
    </div>
  );
};
export default SearchBar;

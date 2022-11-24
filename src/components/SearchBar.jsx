import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleSearch();
    }
  };

  const handleSearch = () => {
    // 데이터가 있을때만 실행시켜주기 위해 사용
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <div className="search" onKeyPress={onKeyPress}>
      <label htmlFor="searchInput" className="glass">
        <BsSearch />
      </label>
      <input
        type="text"
        id="searchInput"
        className="input__search"
        placeholder="가수 유튜버를 검색하세요!"
        title="검색"
        // 입력받은 값을 searchTerm에 넘김
        value={searchTerm || ""}
        // 변경이 되면 내가 입력한 값을 넘겨줌
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <button type="submit">검색</button> */}
    </div>
  );
};
export default SearchBar;

import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchAPI } from "../utils/fetchAPI";
import { Categorys, Videos } from "./";

const SearchConts = () => {
  const [selectCategory, setSelectCategory] = useState("webstoryboy");
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <main id="main">
      <aside id="aside">
        <Categorys
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <div className="result">
          <em className="keyword">'{searchTerm}'</em> 검색결과
        </div>
        <div className="search">
          {/* 비디오를 넘겨줌 */}
          <Videos videos={videos} />
        </div>
      </section>
    </main>
  );
};

export default SearchConts;

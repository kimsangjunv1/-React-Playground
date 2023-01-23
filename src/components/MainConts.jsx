import React, { useEffect, useState } from "react";

import { fetchAPI } from "../utils/fetchAPI";
import { Categorys, Videos } from "./";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState("webstoryboy");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <main id="main">
      <aside id="aside">
        <Categorys
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
      </aside>
      <section id="contents">
        <h2>
          <em>{selectCategory}</em>'s videos
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;

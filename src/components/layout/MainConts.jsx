import React, { useEffect, useState } from "react";

import { fetchAPI } from "../utils/fetchAPI";
import { Categorys, Videos } from "..";
import Banner from "../common/Banner";

const MainConts = () => {
  const [selectCategory, setSelectCategory] = useState("ITsub");
  const [videos, setVideos] = useState(null);

  // useEffect(() => {
  //   fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
  //     (data) => setVideos(data.items)
  //   );
  // }, [selectCategory]);
  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/main.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setVideos(res.items);
      });
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
        <Banner />
        <h2>
          <em>{selectCategory}</em>'s videos
        </h2>
        <Videos videos={videos} />
      </section>
    </main>
  );
};

export default MainConts;

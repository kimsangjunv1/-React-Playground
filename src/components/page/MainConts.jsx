import React, { useEffect, useState } from "react";

import { fetchAPI } from "../utils/fetchAPI";
import { Categorys, Videos } from "..";
import Banner from "../common/Banner";
import Section from "../common/Section";
import SectionSpace from "../common/SectionSpace";

const MainConts = ({ selectCategory }) => {
  // const [selectCategory, setSelectCategory] = useState("ITsub");
  const [videos, setVideos] = useState(null);

  // Rapid
  // useEffect(() => {
  //   fetchAPI(`search?part=snippet&q=${selectCategory}&type=video`).then(
  //     (data) => setVideos(data.items)
  //   );
  // }, [selectCategory]);

  // 더미
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
      {/* <Categorys
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      /> */}

      <Section>
        <Banner />
        <SectionSpace height={70} />
        <Videos videos={videos} categorys={selectCategory} />
        <SectionSpace height={70} />

        <Videos videos={videos} categorys={selectCategory} />
      </Section>
    </main>
  );
};

export default MainConts;

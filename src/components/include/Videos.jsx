import React from "react";

import { VideoCard, Loader } from "..";

import Title from "../common/Title";

const Videos = ({ videos, categorys }) => {
  if (!videos?.length) return <Loader />;

  return (
    <article className="video_container">
      <Title categorys={categorys} />
      <div className="video_container_inner">
        {videos.map((item, idx) => (
          <VideoCard video={item} key={idx} />
        ))}
      </div>
    </article>
  );
};

export default Videos;

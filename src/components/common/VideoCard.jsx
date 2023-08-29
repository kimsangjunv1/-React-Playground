import React from "react";

import { Link } from "react-router-dom";

import icon_check from "./../../assets/img/icon_check.svg";

// video 안에있는 id 안에있는 videoId값과 / video 안에있는 snippet 값
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
    brandingSettings,
  },
}) => {
  return (
    <Link to={`/video/${videoId}`} className="box">
      <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
      <div className="boxInfo">
        <p className="date">{snippet?.publishedAt}</p>
        <p className="title">{snippet?.title}</p>
        <p className="desc">{snippet?.description}</p>
        <Link to={`/channel/${snippet.channelId}`}>
          <p className="channel_title">{snippet?.channelTitle}</p>
          <img src={icon_check} alt="아이콘 체크" />
          {/* <p>{snippet?.publishedAt}</p> */}
        </Link>
      </div>
    </Link>
  );
};

export default VideoCard;

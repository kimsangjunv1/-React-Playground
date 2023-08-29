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
  const elapsedTime = (date) => {
    const start = new Date(date);
    const end = new Date();

    const diff = (end - start) / 1000;

    const times = [
      { name: "년", milliSeconds: 60 * 60 * 24 * 365 },
      { name: "개월", milliSeconds: 60 * 60 * 24 * 30 },
      { name: "일", milliSeconds: 60 * 60 * 24 },
      { name: "시간", milliSeconds: 60 * 60 },
      { name: "분", milliSeconds: 60 },
    ];

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);

      if (betweenTime > 0) {
        return `${betweenTime}${value.name} 전`;
      }
    }
    return "방금 전";
  };

  const test = (date) => {
    console.log("date : ", date.slice(0, 10));
  };

  // elapsedTime('2022-11-15');
  return (
    <Link to={`/video/${videoId}`} className="box">
      <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
      <div className="boxInfo">
        <p className="date">{elapsedTime(snippet?.publishedAt.slice(0, 10))}</p>
        <p className="date">{snippet?.publishedAt.slice(0, 10)}</p>
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

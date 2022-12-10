import React from "react";

import { Link } from "react-router-dom";

// video 안에있는 id 안에있는 videoId값과 / video 안에있는 snippet 값
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
    brandingSettings,
  },
}) => {
  return (
    <div className="box">
      <Link to={`/video/${videoId}`}>
        <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} />
      </Link>
      <div className="boxInfo">
        <Link to={`/video/${snippet.videoId}`}>
          <p>{snippet?.title}</p>
        </Link>
        <Link to={`/channel/${snippet.channelId}`}>
          <p>{snippet?.channelTitle}</p>
        </Link>
      </div>
    </div>
  );
};

export default VideoCard;

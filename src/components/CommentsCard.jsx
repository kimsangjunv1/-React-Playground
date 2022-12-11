import React from "react";

import { Link } from "react-router-dom";

// video 안에있는 id 안에있는 videoId값과 / video 안에있는 snippet 값
const CommentsCard = ({
  video: {
    // id: { videoId },
    snippet,
  },
}) => {
  return (
    <Link
      className="comments_box"
      to={`/channel/${snippet?.topLevelComment?.snippet?.authorChannelId?.value}`}
    >
      <img
        src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl}
        alt=""
      />
      <div className="Comments_desc">
        <div className="comments_title_cont">
          <h2>{snippet?.topLevelComment?.snippet?.authorDisplayName}</h2>
          <p>{snippet?.topLevelComment?.snippet?.updatedAt}</p>
        </div>
        <p>{snippet?.topLevelComment?.snippet?.textDisplay}</p>
      </div>
    </Link>
  );
};

export default CommentsCard;

import React from "react";

import CommentsCard from "./../common/CommentsCard";
import Loader from "../utils/Loader";

const Comments = ({ comments }) => {
  if (!comments?.length) return <Loader />;

  return (
    <article className="comments__inner">
      {comments.map((item, idx) => (
        <CommentsCard video={item} key={idx} />
      ))}
    </article>
  );
};

export default Comments;

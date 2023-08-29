import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import { Videos, Comments, Loader } from "..";
// import { Comments } from "..";

const VideoConts = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [comments, setComments] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    // fetchAPI(`videos?part=snippet,statistics&id=${id}`).then(
    //   (data) => setVideoDetail(data.items[0])
    //   // (data) => console.log(data.items)
    // );
    // fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
    //   (data) => setVideos(data.items)
    // );
    // fetchAPI(`commentThreads?&part=snippet&videoId=${id}`).then(
    //   (data) => setComments(data.items)
    //   // (data) => console.log(data.items[0])
    // );

    // 더미
    const test = () => {
      fetch(
        `https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/video.json`
      )
        .then((res) => res.json())
        .then((res) => {
          setVideoDetail(res.items[0]);
        });

      fetch(
        `https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/search.json`
      )
        .then((res) => res.json())
        .then((res) => {
          setVideos(res.items);
        });

      fetch(
        `https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/comment.json`
      )
        .then((res) => res.json())
        .then((res) => {
          setComments(res.items);
        });
    };
    test();
    // .then((res) => console.log("?? : ,", videoDetail));
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle, description },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <section className="vid_page_container">
      <div className="vid_page_container_inner">
        <div className="videoView">
          <div className="play">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />
          </div>
          <span className="title">{title}</span>
          <div className="videoConts-info">
            <div className="channel">
              <Link to={`/channel/${channelId}`}>{channelTitle}</Link>
            </div>
            <div className="count">
              <div className="view">조회수 : {viewCount}회</div>
              <div className="like">♥{likeCount}</div>
            </div>
          </div>
          <div className="videoDesc">
            <div className="view">{description}</div>
          </div>
          {/* <div className="videoDesc">
              <div className="view">{videoId}</div>
            </div> */}
          <div className="comments">COMMENTS</div>
          <div className="commentsList">
            <Comments comments={comments} layout="column" />
          </div>
        </div>
        <div className="videoList">
          <Videos videos={videos} layout="column" />
        </div>
      </div>
    </section>
  );
};
export default VideoConts;

import React, { useState, useEffect } from "react";
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";

import { Videos } from "./";

const ChannelConts = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchAPI(`channels?part=snippet&id=${id}`);

      console.log(data?.items[0]);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchAPI(
        `search?channelId=${id}&part=snippet&order=date`
      );
      setVideos(videosData?.items);
    };
    fetchResults();
  }, [id]);

  return (
    <section id="channelConts">
      <div
        className="channel-header"
        style={{
          backgroundImage: `url(${channelDetail?.snippet?.thumbnails.default.url})`,
        }}
      ></div>
      <div className="channel-infor">
        <div className="channel-infor-cont">
          <img
            src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
            alt=""
          />
          <img
            className="profile"
            src={channelDetail?.snippet?.thumbnails?.high?.url}
            alt=""
          />
        </div>
        <div className="channel-desc">
          <h1>{channelDetail?.brandingSettings?.channel?.title}</h1>
          <p>{channelDetail?.brandingSettings?.channel?.description}</p>
          <div>
            <span>
              구독자 수 : {channelDetail?.statistics?.subscriberCount}
            </span>
            <span>
              총 비디오 갯수 : {channelDetail?.statistics?.videoCount}
            </span>
            <span>비디오 카운트 : {channelDetail?.statistics?.viewCount}</span>
          </div>
        </div>
      </div>
      <div className="channel-videos">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default ChannelConts;

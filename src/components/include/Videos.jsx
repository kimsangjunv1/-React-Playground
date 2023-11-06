import React from "react";

import { VideoCard, Loader } from "..";

import Title from "../common/Title";
import { Link } from "react-router-dom";

const Videos = ({ videos, categorys, searchKeyword }) => {
	if (!videos?.length) return <Loader />;

	return (
		<article className="video_container">
			{searchKeyword && <Title categorys={searchKeyword} />}
			<div className="video_container_inner">
				{videos.map((item, idx) => (
					<>{item.id.channelId ? <VideoCard video={item} key={idx} /> : ""}</>
				))}
			</div>

			{categorys ? <Title categorys={categorys} /> : <Title />}
			<div className="video_container_inner">
				{videos.map((item, idx) => (
					<>{item.id.videoId && <VideoCard video={item} key={idx} />}</>
				))}
			</div>
		</article>
	);
};

export default Videos;

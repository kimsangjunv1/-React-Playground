import React from "react";

import { VideoCard, Loader } from "..";

import Title from "../common/Title";
import { Link } from "react-router-dom";

const Videos = ({ videos, categorys, searchKeyword }) => {
	if (!videos?.length) return <Loader />;

	return (
		<article className="video_container">
			<Title categorys="채널검색결과" />
			<div className="video_container_inner">
				{videos.map((item, idx) => (
					<>{item.id.channelId && <VideoCard video={item} key={idx} />}</>
				))}
			</div>
			{/* {videos.map((item, idx) => (
				<>
					{item.id.channelId && (
						<Link to={`/channel/${item.id.channelId}`} className="channel_box">
							<img
								src={item.snippet?.thumbnails?.medium?.url}
								alt={item.snippet?.channelTitle}
							/>
							<a href="asd">asd</a>
						</Link>
					)}
				</>
			))} */}
			{searchKeyword ? (
				<Title categorys={searchKeyword} />
			) : (
				<Title categorys={categorys} />
			)}
			<div className="video_container_inner">
				{videos.map((item, idx) => (
					<>{item.id.videoId && <VideoCard video={item} key={idx} />}</>
				))}
			</div>
		</article>
	);
};

export default Videos;

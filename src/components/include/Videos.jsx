import React, { Fragment } from "react";

import { VideoCard, Loader } from "..";

import Title from "../common/Title";
import { Link } from "react-router-dom";

// ZUSTAND 영역
import useStore from "../store/store";

const Videos = ({ videos, categorys, searchKeyword }) => {
	const { addVideo, dropState, enableDrop, enableDrag, data } = useStore(
		(state) => state
	);
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
				{/* 드래그시 저장 및 true 만약 리덕스에서 true인 상태에서 여기에 드랍해주세요에 올라오면 저장 아닐시 없음 false*/}
				{videos.map((item, idx) => (
					<div
						className="boxbox"
						onDragStart={() => {
							enableDrag(true);
						}}
						onDragEnd={() => {
							if (dropState) {
								addVideo(item);
							}
							enableDrop(false);
						}}
					>
						{item.id.videoId && <VideoCard video={item} key={idx} />}
					</div>
				))}
			</div>
		</article>
	);
};

export default Videos;

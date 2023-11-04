import React, { useState, useEffect } from "react";
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from "react-router-dom";

import { Videos } from "..";

import icon_subscriber from "./../../assets/img/icon_subscriber.svg";
import icon_views from "./../../assets/img/icon_views.svg";
import icon_videos from "./../../assets/img/icon_videos.svg";

const ChannelConts = () => {
	const [channelDetail, setChannelDetail] = useState();
	const [videos, setVideos] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		// const fetchResults = async () => {
		// 	const data = await fetchAPI(`channels?part=snippet&id=${id}`);

		// 	console.log(data?.items[0]);
		// 	setChannelDetail(data?.items[0]);

		// 	const videosData = await fetchAPI(
		// 		`search?channelId=${id}&part=snippet&order=date`
		// 	);
		// 	setVideos(videosData?.items);
		// };
		// fetchResults();

		// 더미
		const test = () => {
			fetch(
				`https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/channelDetail.json`
			)
				.then((res) => res.json())
				.then((res) => {
					setChannelDetail(res.items[0]);
				});

			fetch(
				`https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/search.json`
			)
				.then((res) => res.json())
				.then((res) => {
					setVideos(res.items);
				});
		};
		test();
	}, [id]);

	return (
		<section className="channel_page_container">
			<div className="channel_page_container_inner">
				<img
					src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
					alt="채널 배경(블러)"
					className="channel_bg_blur"
				/>
				<div className="channel_info">
					<div className="channel_info_container">
						<img
							src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
							alt="채널 배경"
							className="channel_bg"
						/>
						<img
							className="profile"
							src={channelDetail?.snippet?.thumbnails?.high?.url}
							alt=""
						/>
					</div>
					<div className="channel_desc">
						<h1 className="title">
							{channelDetail?.brandingSettings?.channel?.title}
						</h1>
						<p className="description">
							{channelDetail?.brandingSettings?.channel?.description}
						</p>
						<div className="channel_info_detail">
							<div className="item">
								<img src={icon_subscriber} alt="" />
								<p className="count">
									{channelDetail?.statistics?.subscriberCount}
								</p>
								<p className="desc">Subscribers</p>
							</div>
							<div className="item">
								<img src={icon_videos} alt="" />

								<p className="count">{channelDetail?.statistics?.videoCount}</p>
								<p className="desc">Videos</p>
							</div>
							<div className="item">
								<img src={icon_views} alt="" />

								<p className="count">{channelDetail?.statistics?.viewCount}</p>
								<p className="desc">Views</p>
							</div>
						</div>
					</div>
				</div>
				<div className="channel_videos">
					<Videos videos={videos} />
				</div>
			</div>
		</section>
	);
};

export default ChannelConts;

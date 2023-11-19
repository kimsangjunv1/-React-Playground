import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams, Link } from "react-router-dom";
import { fetchAPI } from "../utils/fetchAPI";
import { Videos, Comments, Loader } from "..";

import Icon_Comments from "./../../assets/img/icon_comments.svg";
import Icon_Language from "./../../assets/img/icon_language.svg";
// import { Comments } from "..";

const VideoConts = () => {
	const [videoDetail, setVideoDetail] = useState(null);
	const [videos, setVideos] = useState(null);
	const [comments, setComments] = useState(null);
	// const [channelInfo, setChannelInfo] = useState(null);
	const { id } = useParams();
	useEffect(() => {
		fetchAPI(`videos?part=snippet,statistics&id=${id}`).then(
			(data) => setVideoDetail(data.items[0])
			// (data) => console.log(data.items)
		);
		fetchAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
			(data) => setVideos(data.items)
		);
		fetchAPI(`commentThreads?&part=snippet&videoId=${id}`).then(
			(data) => setComments(data.items)
			// (data) => console.log(data.items[0])
		);

		// 더미
		// const test = () => {
		// 	fetch(
		// 		`https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/video.json`
		// 	)
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			setVideoDetail(res.items[0]);
		// 		});

		// 	fetch(
		// 		`https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/search.json`
		// 	)
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			setVideos(res.items);
		// 		});

		// 	fetch(
		// 		`https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/comment.json`
		// 	)
		// 		.then((res) => res.json())
		// 		.then((res) => {
		// 			setComments(res.items);
		// 		});
		// 	// fetch(
		// 	//   `https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/channel.json`
		// 	// )
		// 	//   .then((res) => res.json())
		// 	//   .then((res) => {
		// 	//     setChannelInfo(res.items[0]);
		// 	//     console.log("여기? : ", res);
		// 	//   });
		// };
		// test();
	}, [id]);

	if (!videoDetail?.snippet) return <Loader />;

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

	const {
		snippet: { title, channelId, channelTitle, description, publishedAt },
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
							<p>{channelTitle.slice(0, 2)}</p>
							<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
						</div>
						<div className="count">
							<span className="language">
								<img src={Icon_Language} alt="언어" />
								KO
							</span>

							<span>{elapsedTime(publishedAt.slice(0, 10))}</span>
							<span className="view">조회수 : {viewCount}회</span>
							<span className="like">♥{likeCount}</span>
						</div>
					</div>
					<div className="videoDesc">
						<div className="view">{description}</div>
					</div>
					{/* <div className="videoDesc">
              <div className="view">{videoId}</div>
            </div> */}
					<div className="comments">
						<img src={Icon_Comments} alt="댓글 아이콘" />
						COMMENTS
					</div>
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

import React from "react";

import { Link } from "react-router-dom";
import icon_heart from "./../../assets/img/icon_heart.svg";

// video 안에있는 id 안에있는 videoId값과 / video 안에있는 snippet 값
const CommentsCard = ({
	video: {
		// id: { videoId },
		snippet,
	},
}) => {
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
					<p>
						{elapsedTime(
							snippet?.topLevelComment?.snippet?.updatedAt.slice(0, 10)
						)}
					</p>
				</div>
				<p className="commets_contents">
					{snippet?.topLevelComment?.snippet?.textDisplay}
				</p>
				<div className="comments_info">
					<span className="like">
						<img src={icon_heart} alt="좋아요 아이콘" />
						{snippet?.topLevelComment?.snippet?.likeCount}
					</span>
					<span className="reply">{snippet?.totalReplyCount}개의 답글</span>
				</div>
			</div>
		</Link>
	);
};

export default CommentsCard;

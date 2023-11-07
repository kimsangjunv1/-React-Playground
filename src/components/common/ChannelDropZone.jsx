import React from "react";
import icon_drop from "./../../assets/img/icon_drop.svg";
import { Link } from "react-router-dom";
import useStore from "../store/store";
import icon_noimage from "./../../assets/img/icon_noimage.svg";
import icon_close from "./../../assets/img/icon_close.svg";

const ChannelDropZone = () => {
	const { channelData, enableChannelDrop, removeChannel } = useStore(
		(state) => state
	);

	console.log("channelData : ", channelData);

	return (
		<div className="favorite_container">
			<div
				className="drop_here"
				onDragOver={(event) => {
					enableChannelDrop(true);
				}}
			>
				<img src={icon_drop} alt="박스 아이콘" />
				<p className="channel_title">
					당신이 원하는 채널을
					<br />
					이곳에 드래그 앤 드롭 해주세요
				</p>
			</div>
			{channelData &&
				channelData.map((category, key) => (
					<Link
						className="item"
						to={`/channel/${category.channelId}`}
						key={key}
					>
						{category.profile ? (
							<img src={category.profile} alt="프로파일 이미지" />
						) : (
							<div className="broken">
								<img src={icon_noimage} alt="이미지가 없음" />
								{/* <p>이미지가 없습니다.</p> */}
							</div>
						)}
						<span className="channel_title">{category.channelTitle}</span>
						<button
							className="remove_btn"
							onClick={(event) => {
								removeChannel(
									channelData.filter(
										(good) => good.channelId !== category.channelId
									)
								);
							}}
						>
							<img src={icon_close} alt="지우기" />
						</button>
					</Link>
				))}
		</div>
	);
};

export default ChannelDropZone;

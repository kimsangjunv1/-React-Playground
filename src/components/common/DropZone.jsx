import React from "react";
import dummy_screenshot from "./../../assets/img/dummy_screenshot.jpg";
import icon_drop from "./../../assets/img/icon_drop.svg";
import icon_close from "./../../assets/img/icon_close.svg";
import { Link } from "react-router-dom";

// ZUSTAND 영역
import useStore from "../store/store";

const DropZone = () => {
	const {
		data,
		enableDrop,
		enableDrag,
		dragState,
		dropState,
		removeVideo,
		addVideo,
	} = useStore((state) => state);

	return (
		<div className={`dropbox ${dragState ? "open" : "close"}`}>
			<div className="title">
				{/* <img src={icon_drop} alt="드랍아이콘" /> */}
				<p>Drop-Box</p>
			</div>
			<div
				className="dropbox_inner"
				onDragOver={(event) => {
					enableDrop(true);
				}}
			>
				{/* <div
					className="drophere"
					onDragOver={(event) => {
						enableDrop(true);
					}}
				>
					<div>
						<img src={icon_drop} alt="드랍아이콘" />
					</div>
				</div> */}
				{data && (
					<>
						{data.map((item, idx) => (
							<Link className="item" to={`/video/${item.id?.videoId}`}>
								<button
									onClick={(event) => {
										removeVideo(
											data.filter((good) => good.id.videoId !== item.id.videoId)
										);
									}}
								>
									<img src={icon_close} alt="close" />
								</button>
								<img src={item.snippet?.thumbnails?.medium?.url} alt="이미지" />
								<p>{item.snippet?.title}</p>
							</Link>
						))}
					</>
				)}
			</div>
			<button
				className="close_btn"
				onClick={() => {
					enableDrag(false);
				}}
			>
				닫기
			</button>
		</div>
	);
};

export default DropZone;

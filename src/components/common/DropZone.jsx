import React from "react";
import dummy_screenshot from "./../../assets/img/dummy_screenshot.jpg";
import icon_drop from "./../../assets/img/icon_drop.svg";

// ZUSTAND 영역
import useStore from "../store/store";

const DropZone = () => {
	const { bears, increasePopulation, removeAllBears } = useStore(
		(state) => state
	);
	return (
		<div className="dropbox">
			<div className="dropbox_inner">
				<div className="drophere">
					<div>
						<img src={icon_drop} alt="드랍아이콘" />
						<h1>{bears} around here ...</h1>
						<button onClick={increasePopulation}>one up</button>
						<button onClick={removeAllBears}>remove all</button>
					</div>
				</div>
				<div className="item">
					<img src={dummy_screenshot} alt="이미지" />
					<p>애플 아이폰 15</p>
				</div>
				<div className="item">
					<img src={dummy_screenshot} alt="이미지" />
					<p>애플 아이폰 15</p>
				</div>
				<div className="item">
					<img src={dummy_screenshot} alt="이미지" />
					<p>애플 아이폰 15</p>
				</div>
			</div>
		</div>
	);
};

export default DropZone;

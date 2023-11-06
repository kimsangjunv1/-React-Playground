import React from "react";
import dummy_screenshot from "./../../assets/img/dummy_screenshot.jpg";
import icon_drop from "./../../assets/img/icon_drop.svg";

const dummy = [
	{
		이름: "김상준",
		성별: "남자",
	},
];

const DropZone = () => {
	return (
		<div className="dropbox">
			<div className="dropbox_inner">
				<div className="drophere">
					<div>
						<img src={icon_drop} alt="드랍아이콘" />
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

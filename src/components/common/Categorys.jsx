import React from "react";

import { categories } from "../utils/content";
import { Link } from "react-router-dom";

import ChannelDropZone from "./ChannelDropZone";

import icon_noimage from "./../../assets/img/icon_noimage.svg";

const Categorys = ({ selectCategory, setSelectCategory }) => {
	let filteredCategory = categories.filter((good) => good.id);
	// console.log("test : ", testtest);
	return (
		<aside id="aside">
			<p className="title">내가 보관한 채널</p>

			<ChannelDropZone />

			<hr />
			<p className="title">기본 채널</p>
			<div className="default_container">
				{filteredCategory.map((category) => (
					<Link className="item" to={`/channel/${category.id}`}>
						{category.profile ? (
							<img src={category.profile} alt="프로파일 이미지" />
						) : (
							<div className="broken">
								<img src={icon_noimage} alt="이미지가 없음" />
								{/* <p>이미지가 없습니다.</p> */}
							</div>
						)}
						<span
							style={{
								color: category.name === selectCategory ? "white" : "white",
							}}
							className="channel_title"
						>
							{category.name}
						</span>
					</Link>
				))}
			</div>
			<hr />
			<p className="title">확장기능</p>

			<div className="extension_container">
				<button>Expand</button>
				<button>Settings</button>
			</div>
		</aside>
	);
};

export default Categorys;

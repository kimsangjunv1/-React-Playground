import React from "react";

import { categories } from "../utils/content";
import icon_noimage from "./../../assets/img/icon_noimage.svg";
import icon_drop from "./../../assets/img/icon_drop.svg";

const Categorys = ({ selectCategory, setSelectCategory }) => {
	return (
		<aside id="aside">
			<p className="title">내가 보관한 채널</p>
			<div className="favorite_container">
				<div className="drop_here">
					<img src={icon_drop} alt="박스 아이콘" />
					<p className="channel_title">
						당신이 원하는 채널을
						<br />
						이곳에 드래그 앤 드롭 해주세요
					</p>
				</div>
			</div>
			<hr />
			<p className="title">기본 채널</p>
			<div className="default_container">
				{categories.map((category) => (
					<button
						style={{
							backgroundColor:
								category.name === selectCategory && "var(--dark-hover-color)",
						}}
						key={category.name}
						onClick={() => setSelectCategory(category.name)}
					>
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
					</button>
				))}
			</div>
			<hr />
			<p className="title">확장기능</p>

			<div className="extension_container">Expand</div>
		</aside>
	);
};

export default Categorys;

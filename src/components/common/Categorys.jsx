import React from "react";

import { categories } from "../utils/content";
import icon_noimage from "./../../assets/img/icon_noimage.svg";

const Categorys = ({ selectCategory, setSelectCategory }) => {
	return (
		<aside id="aside">
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
		</aside>
	);
};

export default Categorys;

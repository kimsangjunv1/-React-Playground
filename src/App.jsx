import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Categorys from "./components";
import DropZone from "./components/common/DropZone";
import Button from "./components/common/Button";

import icon_drop from "./assets/img/icon_drop.svg";

import {
	MainConts,
	VideoConts,
	ChannelConts,
	SearchConts,
	HeaderConts,
	Categorys,
} from "./components";

const App = () => {
	const [selectCategory, setSelectCategory] = useState("태블릿 갤럭시 아이폰");
	// const [maxResults, setMaxResults] = useState(10);

	// window.addEventListener("scroll", () => {
	// 	let winScroll =
	// 		document.body.scrollTop || document.documentElement.scrollTop;
	// 	let height =
	// 		document.documentElement.scrollHeight -
	// 		document.documentElement.clientHeight;

	// 	if ((winScroll / height) * 100 === 100) {
	// 		// setMaxResults((state) => state + 10);
	// 		setMaxResults(maxResults + 10);
	// 		console.log("maxResults : ", maxResults);

	// 		// fetchAPI(
	// 		// 	`search?part=snippet&q=${selectCategory}&type=video&maxResults=${maxResults}`
	// 		// ).then((data) => setVideos(data.items));
	// 	}
	// });
	return (
		<BrowserRouter>
			<HeaderConts />
			<Categorys
				selectCategory={selectCategory}
				setSelectCategory={setSelectCategory}
			/>
			<Button text={"이곳에 원하는 영상을 끌어다 놔주세요"} icon={icon_drop} />
			<DropZone />
			<Routes>
				<Route
					path="/"
					element={<MainConts selectCategory={selectCategory} />}
				></Route>
				<Route path="/video/:id" element={<VideoConts />}></Route>
				<Route path="/channel/:id" element={<ChannelConts />}></Route>
				<Route path="/search/:searchTerm" element={<SearchConts />}></Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;

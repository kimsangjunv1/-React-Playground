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
	const [selectCategory, setSelectCategory] = useState("ITsub");
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

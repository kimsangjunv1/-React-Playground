import React, { useEffect, useState } from "react";

import { fetchAPI } from "../utils/fetchAPI";
import { Videos } from "..";
import Loader from "./../utils/Loader";
import Banner from "../common/Banner";
import Section from "../common/Section";
import SectionSpace from "../common/SectionSpace";

const MainConts = ({ selectCategory }) => {
	const [videos, setVideos] = useState(null);

	const [maxResults, setMaxResults] = useState(10);

	window.addEventListener("scroll", () => {
		let winScroll =
			document.body.scrollTop || document.documentElement.scrollTop;
		let height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight;

		if ((winScroll / height) * 100 === 100) {
			setMaxResults(maxResults + 10);
			console.log("maxResults : ", maxResults);
		}
	});

	useEffect(() => {
		// 더미
		// fetch(
		// 	`https://raw.githubusercontent.com/kimsangjunv1/-React-Tech-Tube/main/src/components/utils/main.json`
		// )
		// 	.then((res) => res.json())
		// 	.then((res) => {
		// 		setVideos(res.items);
		// 	});

		// 실제
		fetchAPI(
			`search?part=snippet&q=${selectCategory}&type=video&maxResults=${maxResults}`
		).then((data) => setVideos(data.items));
	}, [selectCategory]);

	if (!videos?.length) return <Loader />;

	return (
		<main id="main">
			{/* <Categorys
        selectCategory={selectCategory}
        setSelectCategory={setSelectCategory}
      /> */}

			<Section>
				<Banner />
				{/* <SectionSpace height={70} />
        <Videos videos={videos} categorys={selectCategory} /> */}
				<SectionSpace height={70} />
				<Videos videos={videos} categorys={selectCategory} />
			</Section>
		</main>
	);
};

export default MainConts;

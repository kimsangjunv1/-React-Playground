import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchAPI } from "../utils/fetchAPI";
import { Videos } from "..";
import Section from "../common/Section";

const SearchConts = () => {
	const [videos, setVideos] = useState(null);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
			setVideos(data.items)
		);
	}, [searchTerm]);

	return (
		<main id="main">
			<Section>
				<Videos videos={videos} searchKeyword={searchTerm} />
			</Section>
		</main>
	);
};

export default SearchConts;

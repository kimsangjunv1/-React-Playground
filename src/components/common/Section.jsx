import React from "react";

const Section = ({ children }) => {
	return (
		<section id="contents">
			<div className="section_inner">{children}</div>
		</section>
	);
};

export default Section;

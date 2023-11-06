import React from "react";
import useStore from "../store/store";

const Button = ({ text, icon }) => {
	const { enableDrag, dragState } = useStore((state) => state);
	return (
		<button
			className={`btn ${dragState ? "hide" : "show"}`}
			onClick={() => {
				enableDrag(true);
			}}
		>
			{icon && <img src={icon} alt="아이콘" />}
			{text}
		</button>
	);
};

export default Button;

import React from "react";

import { categories } from "../utils/content";

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
          {/* <span
            style={{
              color: category.name === selectCategory ? "#000" : "#000",
            }}
          >
            {category.icon}
          </span> */}

          {category.profile && (
            <img src={category.profile} alt="프로파일 이미지" />
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

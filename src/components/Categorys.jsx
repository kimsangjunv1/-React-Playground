import React from "react";

import { categories } from "../utils/content";

const Categorys = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? "#DC493E" : "transparent",
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectCategory ? "#fff" : "#000",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              color: category.name === selectCategory ? "#fff" : "#000",
            }}
            className="channel_title"
          >
            {category.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Categorys;

import React from "react";

import { categories } from "./utils/content";

const Categorys = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          style={{
            backgroundColor:
              category.name === selectCategory ? "#e4e3ec" : "transparent",
          }}
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectCategory ? "#000" : "#000",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              color: category.name === selectCategory ? "#000" : "#000",
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

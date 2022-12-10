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
          <span>{category.icon}</span>
          <span className="channel_title">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Categorys;

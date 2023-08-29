import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// import Categorys from "./components";

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

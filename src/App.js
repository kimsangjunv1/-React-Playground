import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  MainConts,
  VideoConts,
  ChannelConts,
  SearchConts,
  HeaderConts,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <HeaderConts />
      <Routes>
        <Route path="/" element={<MainConts />}></Route>
        <Route path="/video/:id" element={<VideoConts />}></Route>
        <Route path="/channel/:id" element={<ChannelConts />}></Route>
        <Route path="/search/:searchTerm" element={<SearchConts />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

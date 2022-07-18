import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Main from "./Main";
import Manual from "./Routes/Manual";

function Router(props) {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/manual" element={<Manual />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

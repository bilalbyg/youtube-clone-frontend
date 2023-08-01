import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return(  
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={"/"} exact element={<Home />} />
        <Route path={"/video"} exact element={<Video />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;

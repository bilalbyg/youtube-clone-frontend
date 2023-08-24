import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";
import "./App.css";
import Deneme from "./pages/Deneme";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Channel from "./pages/Channel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/deneme" element={<Deneme />} />
          <Route path="/channel/:id" element={<Channel />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

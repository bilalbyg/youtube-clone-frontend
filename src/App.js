import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Navbar from "./components/Navbar";
import "./App.css";
import Deneme from "./pages/Deneme";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/deneme" element={<Deneme />} />
          <Route path="/video/:id" element={<Video />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

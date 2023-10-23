import { useEffect, useState } from "react";
import "./App.css";
import "normalize.css";
import Intro from "./pages/Intro/intro";
import Home from "./pages/Home/home";
import Work from "./pages/Work/work";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Navbar from "./components/navbar";
import FullPageCarousel from "./components/fullpage_carousel";

function App() {
  return (
    <div className="container w-full h-full m-auto">
      <Intro />
      <div className="z-10 w-full h-full bg-[#f6f1eb] animate-slideInUp translate-y-full animation-delay-3000 overflow-hidden">
        <Navbar />
        <FullPageCarousel home={<Home />} />
      </div>
    </div>
  );
}

export default App;

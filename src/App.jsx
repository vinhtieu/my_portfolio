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

const createComponents = (condition) => {
  if (condition) {
    return <Intro />;
  }

  return (
    <>
      <Intro position={"absolute top-0 bottom-0 right-0 left-0"} />
      <div className="z-10 w-full h-full bg-[#f6f1eb] animate-slideInUp">
        <Navbar />
        <FullPageCarousel home={<Home />} />
      </div>
    </>
  );
};

function App() {
  const [isIntro, setIsIntro] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsIntro(false);
    }, 3000);
  });
  return (
    <div className="container w-full h-full m-auto">
      {createComponents(isIntro)}
    </div>
  );
}

export default App;

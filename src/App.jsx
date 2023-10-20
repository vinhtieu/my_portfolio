import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Intro from "./pages/Intro/intro";
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Intro></Intro>
      <Home></Home>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default App;

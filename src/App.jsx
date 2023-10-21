import { useState } from "react";
import Home from "./pages/Home/home";
import Projects from "./pages/Projects/projects";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <p>
      <div className="font-intrepid bg-[#f6f1eb] text-black  ">
        <Home></Home>
        {/*
        <Projects></Projects>
        <About></About>
        <Contact></Contact> */}
      </div>
    </p>
  );
}

export default App;

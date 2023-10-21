import { useState } from "react";
import Home from "./pages/Home/home";
import Work from "./pages/Work/work";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import "./App.css";
import Navbar from "./components/navbar";
import FullPageCarousel from "./components/fullpage_carousel";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container w-full h-full m-auto">
      {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
          </Routes>
          <Home></Home>
        </BrowserRouter> */}
      <Navbar />
      <FullPageCarousel home={<Home />} />

      {/* <About /> */}
    </div>
  );
}

export default App;

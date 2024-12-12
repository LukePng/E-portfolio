import React, { useState, useEffect }from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About/About";
import Experiences from "./components/Experiences";
import Achievements from "./components/Achievements";
import Interests from "./components/Interests/Interests";
import Quote from "./components/About/Quote";
import Photography from "./components/Interests/photography";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Home scrollPosition={scrollPosition} />
      <About scrollPosition={scrollPosition} />
      <Quote />
      <Interests />
      <Photography />
      <Achievements />
      <Experiences />
    </div>
  );
}

export default App;

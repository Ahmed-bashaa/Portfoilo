// App.js
import React, { useEffect } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GoToTopButton from "./components/GoToTopButton/GoToTopButton";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ReactGA from "react-ga4";
import AOS from "aos";
import "aos/dist/aos.css";
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

function App() {
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.setAttribute("data-theme", savedTheme);
    } else {
      document.body.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    AOS.init({
      duration: 1500,
      offset: 200,
      delay: 100,
      once: true,
    });
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <main className="App">
      <GoToTopButton />
      <ThemeToggle />
      <Navbar toggleTheme={toggleTheme} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

import "./App.css";
import WelcomePage from "./components/WelcomePage";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <a>LinkedIn</a>
          <a>Email</a>
        </div>
      </header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

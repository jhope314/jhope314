import "./App.css";
import WelcomePage from "./components/WelcomePage";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import LinkedInLogo from "./images/linkedinlogo.png";
import GitHubLogo from "./images/github.png";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Link to="/jhope314">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/resume">Resume</Link>
        </div>
        <div className="logo">
        <Link to="https://www.linkedin.com/in/jennifer-heckel/" className="logolink"><img src={LinkedInLogo} alt="LinkedIn" className="logolink" /></Link>
        <Link to="https://github.com/jhope314" className="logolink"><img src={GitHubLogo} alt="GitHub" className="logolink"/></Link>
        </div>
      </header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/jhope314" element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;

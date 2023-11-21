import "./WelcomePage.css";
import React, { useState } from "react";
import Fader from "../UI/Fader";
import Intro from "./Intro";
import { motion } from "framer-motion";


const WelcomePage = () => {
  const [fadeProp, setFadeProp] = useState("fade-out");

  const clickHandler = (event) => {
    if (fadeProp === "fade-out") {
      setFadeProp("fade-in");
    } else {
      setFadeProp("fade-out");
    }
  };

  const followHandler = (followSelect) => {
    console.log(followSelect);
  };

  return (
    <motion.div
      className="main"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1 className="welcome">W E L C O M E </h1>
      </div>
      <div>
        {/* prettier-ignore */}
        <button className="question" onClick={clickHandler}>
          W H Y  A M  I  H E R E ? →
        </button>
      </div>
      <div className="bio">
        <Fader item={<Intro onFollow={followHandler} />} fade={fadeProp} />
      </div>
    </motion.div>
  );
};

export default WelcomePage;


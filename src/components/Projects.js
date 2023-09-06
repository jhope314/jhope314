import { motion } from "framer-motion";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const tabsData = [
    {
      id: "0",
      label: "Resume",
      content: "My Resume :)",
    },
    {
      id: "1",
      label: "Cover Letter",
      content: "Pls hire me",
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState("0");

  return (
     
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}className="main">
      <div className="resume-cv">
        {tabsData.map((tab) => {
          return (
            <div>
              <div>
                <button
                  key={tab.id}
                  className={`option ${
                    tab.id === activeTabIndex ? "selected" : ""
                  }`}
                  onClick={() => setActiveTabIndex(tab.id)}
                >
                  {tab.label}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
          <p>
            {
              tabsData.find((item) => {
                return item.id === activeTabIndex;
              }).content
            }
          </p>
        </div>

    </motion.div>
  );
};

export default Projects;

import { motion } from "framer-motion";
import "./Resume.css";
import { useState } from "react";
import ResumeContent from "./ResumeContent";
import CoverLetterContent from "./ResumeCoverLetter";
import ResumeFile from "../downloads/Heckel_Jennifer_Resume_Technical_2023_Oct.pdf";
import CVFile from "../downloads/Heckel_Jennifer_Cover_Letter.pdf"


const Resume = () => {
  // I could call on a component that stores the data and pass on a props which holds the key. The child component could then return the appropriate content based on the key.
  const tabsData = [
    {
      id: "0",
      label: "R E S U M E",
      content: ResumeContent(),
    },
    {
      id: "1",
      label: "C O V E R  L E T T E R",
      content: CoverLetterContent(),
    },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState("0");

  console.log(activeTabIndex);

  const content = tabsData.find((item) => {
    return item.id === activeTabIndex;
  }).content;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="main"
    >
      <div className="resume-cv">
        {tabsData.map((tab) => {
          return (
            <button
              key={tab.id}
              tabkey={tab.id}
              className={`option ${
                tab.id === activeTabIndex ? "selected" : "unselected"
              }`}
              onClick={() => {
                setActiveTabIndex(tab.id);
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="content">{content}</div>

      <div className="resume-cv-download">
        <a
          href={ResumeFile}
          className="resume-cv-download-button"
          download="Heckel_Jennifer_Resume"
        >
          Download Resume PDF
        </a>
        <a
          href={CVFile}
          className="resume-cv-download-button"
          download
        >
          Download Cover Letter PDF
        </a>
      </div>
    </motion.div>
  );
};

export default Resume;

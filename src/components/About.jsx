import "./About.css";
import Bio from "./Bio";
import Self from "../images/Self.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <div className="text">
        <div className="title">
            A B O U T  M E
            </div>
        <hr className="underline"/>
        <Bio />
      </div>
      <div className="picture">
        <img src={Self}  alt="" className="self"></img>
      </div>
    </motion.div>
  );
};

export default About;

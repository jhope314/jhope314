import "./Intro.css";
import { Link } from "react-router-dom";

const Intro = (props) => {
  const clickHandler = () => {
    props.onFollow(true);
  };

  return (
    <div className="intro">
      <p>Why are you here? </p>
      <p>
        Hopefully, it's to find out a little bit more about me, Jennifer Heckel.{" "}
        <br /> Please feel free to explore and find out more details on who I
        am and my work history.
      </p>
      <p>Not sure where to start? No problem . . .</p>
      {/* prettier-ignore */}
      <Link to="/about" className="question" onClick={clickHandler}>F O L L O W  M E →</Link>
    </div>
  );
};

export default Intro;

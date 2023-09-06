import "./Fader.css";

const Fader = (props) => {
  return (
    <div className={props.fade}>
      {props.item}
    </div>
  );
};

export default Fader;

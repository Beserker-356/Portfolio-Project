import HeartImoji from "../../Images/heartemoji.png";
import Glasses from "../../Images/glasses.png";
import Humble from "../../Images/humble.png";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./skills.css";

function Skills() {
    return (
      <div className="skills">
        <h1>Skills</h1>
        <div className="progress-cont">
          <ProgressBar percent={100} name={"HTML"} />
          <ProgressBar percent={90} name={"CSS"} />
          <ProgressBar percent={80} name={"JS"} />
          <ProgressBar percent={70} name={"Python"} />
          <ProgressBar percent={50} name={"React"} />
          <ProgressBar percent={80} name={"Java"} />
          <ProgressBar percent={40} name={"CLI"} />
        </div>
        <div className="blur2"></div>
        <div className="blur4"></div>
        <div className="blur3"></div>
      </div>
    );
}

export default Skills;
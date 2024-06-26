import Github from "../../Images/github.png";
import Linkdein from "../../Images/linkedin.png";
import Instagram from "../../Images/instagram.png";
import Vector1 from "../../Images/Vector1.png";
import Vector2 from "../../Images/Vector2.png";
import boy from "../../Images/me.png";
import thumbup from "../../Images/thumbup.png";
import Crown from "../../Images/crown.png";
import glassesimoji from "../../Images/glassesimoji.png";
import { motion } from "framer-motion";
import "./Intro.css";

function Intro() {
  const transition = { duration: 1000, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <span>Hey! I Am</span>
        <span>Jenish Thapa</span>
        <span>
          Software developer with high level of experience in web designing and
          development, producing the Quality work.
        </span>
        <button className="button">Hire Me</button>
        <div className="icons">
          <a href="https://github.com/Beserker-356">
            <img src={Github} alt="" />
          </a>
          <a href="https://linkedin.com/in/jenish-thapa-121471289">
            <img src={Linkdein} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img className="y-bg" src={Vector2} alt="" />
        <img className="boy" src={boy} alt="" />
        <img className="b-bg" src={Vector1} alt="" />
        <div className="img-cont">
          <img src={thumbup} alt="" />
          <p>Best Design Award</p>
        </div>
        <motion.img
          initial={{ left: "-400px" }}
          whileInView={{ left: "-200px" }}
          transition={{ transition }}
          src={glassesimoji}
          alt=""
          className="g-emoji"
        />
        <div className="img-cont">
          <img src={Crown} alt="" />
          <p>Web developer</p>
        </div>
        <div className="blur1"></div>
        <div className="blur2"></div>
      </div>
    </div>
  );
}

export default Intro;

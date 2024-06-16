import Wave from "../../Images/wave.png";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} style={{ width: "100%" }} alt="" />
      <div className="f-content">
        <span>jenishhh.56@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/Beserker-356">
            <GitHub color="white" size="3rem" />
          </a>
          <a href="https://linkedin.com/in/jenish-thapa-121471289">
            <LinkedIn color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

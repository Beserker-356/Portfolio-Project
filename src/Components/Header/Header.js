import Toggle from "../Toggle/Toggle";
import "./Header.css"

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Jenish</div>
        <Toggle />
      </div>
      <div className="n-right">
        <nav className="n-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">Testimonials</a>
            </li>
          </ul>
        </nav>
      <button className="n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;

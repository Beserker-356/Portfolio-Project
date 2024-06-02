import "./Header.css"

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Jenish</div>
      </div>
      <div className="n-right">
        <nav className="n-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </nav>
        <button className="n-button">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;

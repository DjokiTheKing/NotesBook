import { Link, Outlet } from "react-router-dom";
import '../css/NavBar.css';

function NavBar() {
  return (
    <div id="nav_root">
      <nav className="nav-zone nav-color sticky">
        <ul className="main-nav">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <button id="new">Create New</button>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
      <footer className="nav-zone nav-color" id="footer">Notesbook by djokitheking.</footer>
    </div>
  );
}

export default NavBar;

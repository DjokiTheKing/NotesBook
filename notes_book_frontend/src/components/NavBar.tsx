import { Link, Outlet, useNavigate } from "react-router-dom";
import createNewNote from "../supporting_stuff/createNewNote";
import userAuth from "../supporting_stuff/userAuth";
import { useEffect } from "react";

function NavBar() {
  let navigate = useNavigate();
  useEffect(()=>{
    if(!userAuth()){
      navigate('/login');
    }
  });
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

          <button id="new" onClick={() => createNewNote()}>Create New</button>

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

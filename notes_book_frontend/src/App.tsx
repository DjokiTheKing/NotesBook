import About from "./components/About";
import Home from "./components/Home";

import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Login from "./components/Login";

import useAuth from "./supporting_stuff/userAuth";

function App() {
  console.log(document.location.pathname);
  return (
    <div id="app_root">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="profile" element={<Profile />}/>
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  );
}

export default App;

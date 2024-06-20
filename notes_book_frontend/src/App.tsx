import About from "./components/About";
import Home from "./components/Home";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import './css/App.css';

function App() {
  return (
    <div id="app_root">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="home" index element={<Home />}/>
          <Route path="about" element={<About />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

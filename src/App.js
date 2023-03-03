import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";
import About from "./components/About";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="App">
      <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
      <Home />
      <About />
    </div>
  );
}

export default App;

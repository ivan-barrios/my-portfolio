import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="App">
      <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
      <Sidebar showMenu={showMenu} />
      {/* <Home /> */}
    </div>
  );
}

export default App;

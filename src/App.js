import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className="App">
      <Navbar
        setShowMenu={setShowMenu}
        showMenu={showMenu}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
      />
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        darkTheme={darkTheme}
      />
      <Home darkTheme={darkTheme} />
      <About darkTheme={darkTheme} />
      <Portfolio darkTheme={darkTheme} />
      <Contact darkTheme={darkTheme} />
    </div>
  );
}

export default App;

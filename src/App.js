import { createContext, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export const ThemeContext = createContext(null);

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

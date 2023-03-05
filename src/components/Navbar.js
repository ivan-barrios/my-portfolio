import "./styles/navbar.css";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Navbar = ({ setShowMenu, showMenu }) => {
  const links = [
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
  ];

  const themeContext = useContext(ThemeContext);

  return (
    <nav>
      <div className="me">
        <div className="switch">
          <ReactSwitch
            onChange={themeContext.toggleTheme}
            checked={themeContext.theme === "dark"}
          />
        </div>
        <h1>Ivan Barrios</h1>
      </div>
      <div className="header-main">
        <ul className="header-links">
          {links.map((link) => (
            <li key={link.name}>
              <a href={"#" + link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
        {showMenu ? (
          <div className="nav-icon">
            <i
              className="fa-solid fa-xmark"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div>
        ) : (
          <div className="nav-icon">
            <i
              className="fa-solid fa-bars"
              onClick={() => setShowMenu(!showMenu)}
            ></i>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

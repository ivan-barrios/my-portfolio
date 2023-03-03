import "./styles/navbar.css";

const Navbar = ({ setShowMenu, showMenu }) => {
  const links = [
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
  ];

  return (
    <nav>
      <div className="me">
        <img
          className="my-img"
          src={require("../images/me.jpeg")}
          alt="Ivan Barrios"
        />
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

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
            <li>
              <a href={link.name}>{link.name}</a>
            </li>
          ))}
        </ul>
        {showMenu ? (
          <ion-icon
            size="large"
            name="close-outline"
            onClick={() => setShowMenu(!showMenu)}
          ></ion-icon>
        ) : (
          <ion-icon
            size="large"
            name="menu-outline"
            onClick={() => setShowMenu(!showMenu)}
          ></ion-icon>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

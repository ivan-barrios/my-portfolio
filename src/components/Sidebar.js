import "./styles/sidebar.css";

const Sidebar = ({ showMenu, setShowMenu }) => {
  const list = ["Home", "About", "Portfolio", "Contact"];

  return (
    <ul className={showMenu ? "sideMenu clicked" : "sideMenu"}>
      {list.map((name) => (
        <li key={name}>
          <a href={"#" + name} onClick={() => setShowMenu(!showMenu)}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;

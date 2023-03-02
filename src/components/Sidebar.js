import "./styles/sidebar.css";

const Sidebar = ({ showMenu }) => {
  return (
    <ul className={showMenu ? "sideMenu clicked" : "sideMenu"}>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Sidebar;

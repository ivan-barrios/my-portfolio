import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/ivan-barrios-030b7721a/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/ivan-barrios/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <h1>HEY, I'M IVAN BARRIOS</h1>
      <p>
        A Frontend focused Web Developer building the Frontend of Websites and
        <br />
        Web Applications that leads to the success of the overall product
      </p>
      <h1>BUTTON</h1>
    </div>
  );
};

export default Home;
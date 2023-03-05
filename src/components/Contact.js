import "./styles/contact.css";

const Contact = () => {
  return (
    <div id="Contact" className="contact">
      <h1>Contact</h1>
      <div className="text">
        <p>
          If you have an opportunity to share, or would like to discuss
          anything, you can contact me: ivanbar8112003@gmail.com
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://github.com/ivan-barrios/"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/ivan-barrios-030b7721a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="copyright">
        <p>
          Ivan Barrios
          <br /> Ⓒ 2023
        </p>
      </div>
    </div>
  );
};

export default Contact;

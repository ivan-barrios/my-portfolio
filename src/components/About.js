import "./styles/about.css";
import html from "../images/icons/HTML.svg";
import css from "../images/icons/CSS.svg";
import js from "../images/icons/JavaScript.svg";
import reactlight from "../images/icons/React-Light.svg";
import reactdark from "../images/icons/React-Dark.svg";
import tailwindlight from "../images/icons/TailwindCSS-Light.svg";
import tailwinddark from "../images/icons/TailwindCSS-Dark.svg";
import nodelight from "../images/icons/NodeJS-Light.svg";
import nodedark from "../images/icons/NodeJS-Dark.svg";
import typescript from "../images/icons/TypeScript.svg";
import git from "../images/icons/Git.svg";

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        {/* CAN ADD SOME IMAGES HERE */}
      </div>
      <div className="tech">
        <h1>Skills</h1>
        <div className="skills-images">
          <img src={html} title="HTML" alt="HTML" />
          <img src={css} title="CSS" alt="CSS" />
          <img src={js} title="JS" alt="JS" />
          <img src={reactlight} title="React" alt="React" />
          <img src={tailwindlight} title="TailWind" alt="Tailwind" />
          <img src={nodelight} title="NodeJS" alt="NodeJS" />
          <img src={typescript} title="TypeScript" alt="TypeScript" />
          <img src={git} title="Git" alt="Git" />
        </div>
      </div>
    </div>
  );
};

export default About;

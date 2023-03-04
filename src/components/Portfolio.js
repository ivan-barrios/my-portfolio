import "./styles/portfolio.css";

const Portfolio = () => {
  let projects = [
    {
      name: "Project 1",
      imgsrc: "#",
      describe:
        "The project 1 do this, this and this. The main goal was doing this.",
    },
    {
      name: "Project 2",
      imgsrc: "#",
      describe:
        "The project 2 do this, this and this. The main goal was doing this.",
    },
    {
      name: "Project 3",
      imgsrc: "#",
      describe:
        "The project 3 do this, this and this. The main goal was doing this.",
    },
    {
      name: "Project 4",
      imgsrc: "#",
      describe:
        "The project 4 do this, this and this. The main goal was doing this.",
    },
  ];

  return (
    <div id="Portfolio" className="portfolio">
      <h1>Portfolio</h1>
      <div className="projects">
        {" "}
        {/*Idea: You can make a carousel*/}
        {projects.map((project) => (
          <div key={project.name} className="project">
            <div className="project-img-container">
              <img src={project.imgsrc} alt={project.name} />
            </div>
            <h2>{project.name}</h2>
            <p>{project.describe}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

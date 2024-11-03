import projects from '../projectsData';

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="projects">
      {projects.map((project) => (
        <div key={project.title} className="project">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;

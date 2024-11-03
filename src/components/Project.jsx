import React from 'react';

const Project = ({ title, image, deployedLink, githubLink }) => {
  return (
    <div className="project">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">View GitHub</a>
    </div>
  );
};

export default Project;

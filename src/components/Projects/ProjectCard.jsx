import React from "react";
import "./Projects.css";

const ProjectCard = ({ img, title, desc, captionIcon,link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
    <div className='project'>
      <div className="project-image">
        <img src={img} alt={title} />
        <div className='caption'>
          <img src={captionIcon} alt="Explore" />
          <p>explore</p>
        </div>
      </div>

      <div className="project-desc">
        <h2>{title}</h2>
        <br></br>
        <p>{desc}</p>
      </div>
    </div>
    </a>
  );
};

export default ProjectCard;

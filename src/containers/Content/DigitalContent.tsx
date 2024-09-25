import React from "react";
//import "./DigitalContent.scss";
import projects from "../../data/Digital";
import DigitalProjectCard from "../../components/DigitalProjectCard/DigitalProjectCard";

const Digital: React.FC = () => {
  return (
    <div className="content">
      <div className="digital__projects-container">
        {projects.map((project, index) => (
          <div className="digital__project-card" key={index}>
            <DigitalProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital;
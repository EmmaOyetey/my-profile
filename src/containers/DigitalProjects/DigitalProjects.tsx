import React from "react";
import "./AboutMe.scss";

const AboutMe: React.FC = () => {
  return (
    <>
    <h2 className = "digital-projects__title">About Me</h2>
    <div className="about__content">
            <p className ="about__item">
            People-focused and data-driven; prioritising relationships and empathy while making decisions based on evidence and data.
            </p>
            <p className ="about__item">
            Creative, honest, and determined; valueing opportunities to work within organisations with a strong culture of collaboration and learning  
            </p>
            <p className ="about__item">
            Committed to building trusted relationships; embracing diversity and inclusion 
            </p>
            <p className ="about__item">
            Passionate and expereinced in education, community action, and Human-centred service design
            </p>
        </div>
    </>
  );
};

export default AboutMe;
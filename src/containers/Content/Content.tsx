import React from "react";
import "./Content.scss";
import AboutMe from "../AboutMe/AboutMe";
import Where from "../OrganisationsWhere/Where";
import ExperienceCarousel from "../ExperienceCarousel/ExperienceCarousel";
import OrganisationsCarousel from "../OrganisationsCarousel/OrganisationsCarousel";

const Content: React.FC = () => {
  return (
    <>
      <div className="content">
        <AboutMe />
        </div>
      <div className ="content">
        <Where />
      </div>
      <div className = "content">
        <ExperienceCarousel />
      </div>
      <div className = "content">
        <OrganisationsCarousel />
      </div>
    </>
  );
};

export default Content;

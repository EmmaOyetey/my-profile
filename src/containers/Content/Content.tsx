import React from "react";
import "./Content.scss";
import AboutMe from "../AboutMe/AboutMe";
import Where from "../OrganisationsWhere/Where";

const Content: React.FC = () => {
  return (
    <>
      <div className="content">
        <AboutMe />
        </div>
      <div className="content">
        <AboutMe />
      </div>
      <div className ="where">
        <Where />
      </div>
    </>
  );
};

export default Content;
